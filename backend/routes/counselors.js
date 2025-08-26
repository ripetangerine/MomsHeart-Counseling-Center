// routes/counselors.js
const router = require('express').Router();
const Counselor = require('../models/Counselor');
// 인증 미들웨어 예시
const { requireAdmin } = require('../middleware/auth');

// 목록(검색/필터/페이지)
router.get('/', requireAdmin, async (req, res) => {
  const { q, published, page = 1, limit = 20 } = req.query;
  const filter = { isArchived: false };
  if (published === 'true') filter.isPublished = true;
  if (q) filter.$text = { $search: q }; // text index를 name/title/bio에
  const skip = (Number(page)-1) * Number(limit);

  const [items, total] = await Promise.all([
    Counselor.find(filter).sort({ order: 1, createdAt: -1 }).skip(skip).limit(Number(limit)),
    Counselor.countDocuments(filter)
  ]);
  res.json({ items, total, page: Number(page), limit: Number(limit) });
});

// 단건 조회
router.get('/:slug', requireAdmin, async (req, res) => {
  const doc = await Counselor.findOne({ slug: req.params.slug, isArchived: false });
  if (!doc) return res.status(404).json({ message: 'Not found' });
  res.json(doc);
});

// 생성
router.post('/', requireAdmin, async (req, res) => {
  const payload = req.body;
  // 서버단 검증 생략/추가 가능
  const exists = await Counselor.findOne({ slug: payload.slug });
  if (exists) return res.status(409).json({ message: 'Slug exists' });
  const maxOrder = await Counselor.findOne().sort('-order').select('order').lean();
  payload.order = (maxOrder?.order ?? 0) + 1;
  const doc = await Counselor.create(payload);
  res.status(201).json(doc);
});

// 수정
router.put('/:id', requireAdmin, async (req, res) => {
  const doc = await Counselor.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!doc) return res.status(404).json({ message: 'Not found' });
  res.json(doc);
});

// 소프트삭제(아카이브)
router.delete('/:id', requireAdmin, async (req, res) => {
  const doc = await Counselor.findByIdAndUpdate(req.params.id, { isArchived: true }, { new: true });
  if (!doc) return res.status(404).json({ message: 'Not found' });
  res.json({ ok: true });
});

// 게시/숨김 토글
router.patch('/:id/publish', requireAdmin, async (req, res) => {
  const { isPublished } = req.body;
  const doc = await Counselor.findByIdAndUpdate(req.params.id, { isPublished }, { new: true });
  if (!doc) return res.status(404).json({ message: 'Not found' });
  res.json(doc);
});

// 정렬 일괄 업데이트
router.patch('/reorder/bulk', requireAdmin, async (req, res) => {
  // req.body: [{id, order}, ...]
  const ops = req.body.map(({id, order}) => ({
    updateOne: { filter: { _id: id }, update: { $set: { order } } }
  }));
  await Counselor.bulkWrite(ops);
  res.json({ ok: true });
});

module.exports = router;

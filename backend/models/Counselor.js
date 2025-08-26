// models/Counselor.js
const mongoose = require('mongoose');

const CounselorSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, maxlength: 80 },
  title: { type: String, required: true, trim: true, maxlength: 120 }, // 예: "임상심리사"
  specialties: [{ type: String, trim: true }], // ["아동", "부부", "인지행동"]
  bio: { type: String, default: "" },          // 소개문
  languages: [{ type: String, trim: true }],   // ["ko", "en"]
  certifications: [{ type: String, trim: true }],
  photo: {
    url: { type: String, default: "" },
    alt: { type: String, default: "" }
  },
  isPublished: { type: Boolean, default: false },
  isArchived: { type: Boolean, default: false }, // 소프트 삭제
  order: { type: Number, default: 0 },           // 노출 순서
  slug: { type: String, required: true, unique: true, index: true },
}, { timestamps: true });

module.exports = mongoose.model('Counselor', CounselorSchema);

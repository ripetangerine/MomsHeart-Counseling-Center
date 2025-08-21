export const metadata = {
  metadataBase: new URL("https://www.example.com"),
  title: {
    default: "상담센터 이름",
    template: "%s | 상담센터 이름",
  },
  description: "상담센터 소개 및 상담 안내",
  openGraph: {
    title: "상담센터 이름",
    description: "상담센터 소개 및 상담 안내",
    url: "https://www.example.com",
    siteName: "상담센터 이름",
    images: ["/og-image.png"],
    locale: "ko_KR",
    type: "website",
  },
  alternates: { canonical: "https://www.example.com" },
};
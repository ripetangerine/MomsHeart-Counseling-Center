import './globals.css'
import MainNav from '../components/nav/MainNav'
import Head from 'next/head'

export const metadata = {
  metadataBase: new URL("https://momshearts.co.kr"), // 기본 도메인
  title: {
    default: "엄마마음심리상담센터",
    template: "%s | 엄마마음심리상담센터 Momshearts",
  },
  description: "",
  keywords: ["상담", "심리", "마음", "강서구", "상담센터", "심리상담", "엄마마음"],
  openGraph: {
    title: "엄마마음심리상담센터",
    description: "",
    url: "https://momshearts.co.kr",
    siteName: "엄마마음심리상담센터",
    images: [
      {
        url: "/non/represent.jpg",
        width: 1200,
        height: 630,
        alt: "메인이미지",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "엄마마음심리상담센터",
    description: "엄마들의 마음을 위한 상담 센터 소개 페이지",
    images: ["/non/represent.jpg"],
  },
  alternates: {
    canonical: "https://momshearts.co.kr",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/non/represent.jpg",
  },
  verification: {
    google: "구글-서치콘솔-코드",
    other: { "naver-site-verification": "네이버-코드" },
  },
};


export default function RootLayout({children}) {
  return (
    <html lang="ko">
      <Head>
        <link
        // font setting (heart)
          href="https://hangeul.pstatic.net/hangeul_static/css/nanum-square-neo.css"
          rel="stylesheet"
        />
      </Head>
      <body>
        <MainNav />
        {children}
      </body>
    </html>
  )
}

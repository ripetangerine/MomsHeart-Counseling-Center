import './globals.css'
import MainNav from '../components/nav/MainNav'
import Head from 'next/head'

export const metadata = {
  title: '',
  description: '원페이지 스크롤 테스트중',
}

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

import "./globals.css";
import MainNav from "@/components/nav/MainNav";

export const metadata = {
  title: "",
  description: "원페이지 스크롤 테스트중"
}

export default function RootLayout({child}){
  return(
    <html lang="ko">
      <body>
        <MainNav/>
        {child}
      </body>
    </html>
  );
}
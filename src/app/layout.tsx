import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SeatUp",
  description: "ระบบจองที่นั่งห้องเรียน",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-900 text-white items-center justify-center p-4">
        <div className="max-w-lg w-full bg-slate-800 p-8 md:p-10 rounded-[2.5rem] border border-slate-700 text-center shadow-2xl">
          <div className="w-20 h-20 bg-slate-700 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>
          </div>
          <h1 className="text-2xl md:text-3xl font-black text-white mb-4 tracking-wide">ประกาศ (Announcement)</h1>
          <p className="text-slate-300 leading-relaxed text-sm md:text-base mb-8 text-left">
            <strong className="text-white">เรียนผู้ใช้ทุกท่าน</strong><br/><br/>
            SeatUp ได้ย้ายบริการไปที่ลิงก์ใหม่เเล้ว กรุณาใช้งานผ่านลิงก์นี้: https://seatup-adpj.onrender.com
            <br/><br/>
            ต้องขออภัยในความไม่สะดวกด้วยนะครับ🙇‍♂️ เเต่ไม่ต้องห่วงนะครับเพราะ ข้อมูลห้อง รายชื่อการจอง เเละข้อมูลต่างๆ ยังอยู่ตามปกตินะครับ👍
          </p>
          
          <div className="w-16 h-1 bg-slate-700 mx-auto mb-6 rounded-full"></div>
          
          <p className="text-slate-400 text-sm">
            ต้องขออภัยในความไม่สะดวกนะครับบ 🙇‍♂️🙇‍♂️<br/>
            <span className="block mt-3 font-mono text-xs text-slate-600">— ทีมพัฒนา SeatUp</span>
          </p>
        </div>
      </body>
    </html>
  );
}

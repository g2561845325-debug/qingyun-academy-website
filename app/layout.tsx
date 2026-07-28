import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "青云书院初中部 | 深圳国际化学校",
  description:
    "青云书院初中部面向 G7-G8 学生，提供双语学术课程、项目学习、导师支持与书院成长路径。",
  icons: {
    icon: "/assets/qingyun-logo-blue-cropped.png",
    shortcut: "/assets/qingyun-logo-blue-cropped.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}

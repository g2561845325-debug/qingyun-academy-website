import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cyancloudsacademy.com"),
  title: "青云书院初中部 | 深圳国际化学校",
  description:
    "青云书院初中部面向 G7-G8 学生，提供双语学术课程、项目学习、导师支持与书院成长路径。",
  icons: {
    icon: "/assets/cca-mark-29.png",
    shortcut: "/assets/cca-mark-29.png",
  },
  openGraph: {
    title: "青云书院初中部 | 深圳国际化学校",
    description:
      "在真实问题、双语表达与导师陪伴中，建立面向未来的学习方式。",
    type: "website",
    locale: "zh_CN",
    images: [
      {
        url: "/og.png",
        width: 1728,
        height: 909,
        alt: "CCA 青云书院学生与校园",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "青云书院初中部 | 深圳国际化学校",
    description: "在真实问题中，学会面向未来。",
    images: ["/og.png"],
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

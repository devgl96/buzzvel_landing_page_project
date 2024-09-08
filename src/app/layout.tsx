import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Buzzvel Dev",
  description: "Why I want to work at Buzzvel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          property="og:title"
          content="Buzzvel Dev - Why I want to work at Buzzvel"
        />
        <meta
          property="og:description"
          content="I’m George Lucas, a passionate Full Stack Developer with a strong background in creating innovative web solutions. Let’s explore how can contribute to Buzzvel’s vision."
        />
        <meta
          property="og:image"
          content="../../public/macbook_desk_book.jpg"
        />
        <meta
          property="og:url"
          content="https://georgelucas-buzzvel-project.vercel.app/"
        />
        <meta property="og:type" content="website" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

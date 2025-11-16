import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "سلام | Welcome",
  description: "An inviting landing page that greets visitors in Persian and English.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa">
      <body>{children}</body>
    </html>
  );
}

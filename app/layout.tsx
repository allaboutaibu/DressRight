import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dress Right – Outfit Suggestions for Every Occasion",
  description:
    "Get beginner-friendly outfit suggestions based on your occasion, weather, and mood. Simple, clear, and stylish recommendations for everyone.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

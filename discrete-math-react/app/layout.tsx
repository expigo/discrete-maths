import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Discrete Mathematics for Machine Learning",
  description: "Interactive learning platform for discrete mathematics with focus on ML/DL applications",
  keywords: ["discrete mathematics", "machine learning", "deep learning", "data science", "education"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css"
          integrity="sha384-n8MVd4RsNIU0tAv4ct0nTaAbDJwPJzDEaqSD1odI+WdtXRGWt2kTvGFasHpSy3SV"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}

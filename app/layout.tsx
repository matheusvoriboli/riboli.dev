import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/Cursor";
import { I18nProvider } from "@/lib/i18n";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});


const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Matheus Riboli — Software Developer",
  description:
    "Frontend engineer building modern, fast, and accessible web experiences. Transitioning into full-stack development.",
  keywords: ["Frontend Developer", "React", "Next.js", "TypeScript", "Software Engineer"],
  authors: [{ name: "Matheus Riboli" }],
  openGraph: {
    title: "Matheus Riboli — Software Developer",
    description: "Frontend engineer building modern, fast, and accessible web experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${spaceGrotesk.variable} ${jetbrains.variable} h-full`}
    >
      <body className="min-h-full bg-deep text-ink antialiased">
        {/* Anti-FOUC: set theme attribute before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light')document.documentElement.setAttribute('data-theme','light')}catch(e){}})()`,
          }}
        />
        <I18nProvider>
          <Cursor />
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import Link from "next/link";
import { LanguageProvider } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";

export const metadata: Metadata = {
  metadataBase: new URL("https://cukai.themalaysianinfo.online"),
  title: { default: "Kalkulator Cukai Pendapatan Malaysia — LHDN 2024/2025", template: "%s — Cukai Pendapatan MY" },
  description: "Kira cukai pendapatan peribadi Malaysia 2024/2025. Kalkulator LHDN percuma dengan relief peribadi, relief pasangan, EPF, insurans. Calculate Malaysia personal income tax YA2024/2025.",
  keywords: ["cukai pendapatan malaysia", "income tax calculator malaysia", "kalkulator cukai pendapatan", "lhdn calculator", "pcb calculator malaysia", "tax relief malaysia 2024"],
  icons: { icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🧾</text></svg>" },
  openGraph: { type: "website", locale: "ms_MY", siteName: "Kalkulator Cukai Pendapatan Malaysia" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ms">
      <head>
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7019273666606982" crossOrigin="anonymous" strategy="afterInteractive" />
      </head>
      <body className="min-h-screen flex flex-col">
        <LanguageProvider>
          <nav className="sticky top-0 z-50 bg-black/70 backdrop-blur border-b border-white/10 shadow-sm">
            <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2 font-bold text-white text-lg">
                <span className="text-2xl">🧾</span>
                <div>
                  <div className="leading-none">Cukai Pendapatan MY</div>
                  <div className="text-[10px] text-white/40 font-normal leading-none">Malaysia Income Tax</div>
                </div>
              </Link>
              <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center gap-4 text-sm font-medium text-white/60">
                  <Link href="/" className="hover:text-white transition-colors">Kalkulator</Link>
                  <Link href="/about" className="hover:text-white transition-colors">Tentang</Link>
                </div>
                <LanguageToggle />
              </div>
            </div>
          </nav>
          <main className="flex-1">{children}</main>
          <footer className="border-t border-white/10 bg-black/60 py-6 text-center text-xs text-white/30 space-y-1">
            <p>Kadar cukai dari LHDN Malaysia · Untuk rujukan sahaja · Tax rates from LHDN Malaysia</p>
            <div className="flex flex-wrap justify-center gap-3 mt-2">
              <Link href="/about" className="hover:text-white">Tentang / About</Link>
              <span>·</span>
              <Link href="/privacy-policy" className="hover:text-white">Privasi / Privacy</Link>
              <span>·</span>
              <Link href="/terms" className="hover:text-white">Terma / Terms</Link>
            </div>
            <p className="mt-2">© {new Date().getFullYear()} Cukai Pendapatan MY · Untuk rujukan sahaja / For reference only</p>
          </footer>
        </LanguageProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
export const metadata: Metadata = { title: "Tentang Kalkulator Cukai Pendapatan Malaysia" };
export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 pt-10 pb-16 space-y-6">
      <h1 className="text-3xl font-black text-white">Tentang / About</h1>
      <div className="card-glass rounded-2xl p-6 space-y-4 text-white/70 text-sm leading-relaxed">
        <p><strong className="text-white">Kalkulator Cukai Pendapatan Malaysia</strong> membantu anda menganggarkan cukai pendapatan peribadi berdasarkan kadar LHDN Malaysia untuk Tahun Taksiran (YA) 2024/2025.</p>
        <p><strong className="text-white">Malaysia Income Tax Calculator</strong> helps you estimate personal income tax based on LHDN Malaysia rates for Assessment Year (YA) 2024/2025.</p>
        <p className="text-white/40 text-xs">Untuk pengiraan tepat dan penghantaran e-Borang, sila gunakan portal MyTax LHDN. / For accurate calculation and e-Filing, please use the LHDN MyTax portal.</p>
      </div>
    </div>
  );
}

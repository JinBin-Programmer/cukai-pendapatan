import type { Metadata } from "next";
export const metadata: Metadata = { title: "Dasar Privasi — Cukai Pendapatan MY" };
export default function PrivacyPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 pt-10 pb-16 space-y-6">
      <h1 className="text-3xl font-black text-white">Dasar Privasi / Privacy Policy</h1>
      <div className="card-glass rounded-2xl p-6 space-y-4 text-white/70 text-sm leading-relaxed">
        <p>Semua pengiraan berlaku dalam pelayar anda. Kami tidak menyimpan pendapatan, relief, atau sebarang data kewangan anda.</p>
        <p>All calculations happen in your browser. We do not store your income, reliefs, or any financial data.</p>
        <p className="text-white/40 text-xs">Dikemas kini: Mei 2026 / Updated: May 2026</p>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
export const metadata: Metadata = { title: "Terma Penggunaan — Cukai Pendapatan MY" };
export default function TermsPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 pt-10 pb-16 space-y-6">
      <h1 className="text-3xl font-black text-white">Terma Penggunaan / Terms of Use</h1>
      <div className="card-glass rounded-2xl p-6 space-y-4 text-white/70 text-sm leading-relaxed">
        <p>Keputusan pengiraan adalah anggaran sahaja berdasarkan kadar cukai yang tersedia untuk umum. Kami tidak bertanggungjawab terhadap sebarang keputusan kewangan berdasarkan maklumat ini.</p>
        <p>Calculation results are estimates only based on publicly available tax rates. We are not responsible for any financial decisions based on this information. Always consult a qualified tax professional or LHDN for official advice.</p>
      </div>
    </div>
  );
}

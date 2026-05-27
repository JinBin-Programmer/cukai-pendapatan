import type { Metadata } from "next";
import TaxCalculator from "@/components/TaxCalculator";

export const metadata: Metadata = {
  title: "Kalkulator Cukai Pendapatan Malaysia YA2024 — LHDN",
  description: "Kira cukai pendapatan peribadi Malaysia untuk Tahun Taksiran 2024/2025. Relief peribadi, KWSP, insurans, pendidikan — anggaran cukai dan PCB bulanan.",
};

export default function HomePage() {
  return <TaxCalculator />;
}

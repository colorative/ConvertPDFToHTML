import { useState } from "react";
import InvoicePage from "@/imports/Page3-1/index";
import PaymentPage from "@/imports/Page4/index";

export default function App() {
  const [page, setPage] = useState<"invoice" | "payment">("invoice");

  return (
    <div className="relative min-h-screen w-full">
      {/* Page nav */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex gap-2 bg-white border border-[#d0d5dd] rounded-full px-4 py-2 shadow-md">
        <button
          onClick={() => setPage("invoice")}
          className={`text-[11px] font-['Inter:Semi_Bold',sans-serif] font-semibold px-3 py-1.5 rounded-full transition-colors ${
            page === "invoice"
              ? "bg-[#101828] text-white"
              : "text-[#475467] hover:text-[#101828]"
          }`}
        >
          Page 1 — Invoice
        </button>
        <button
          onClick={() => setPage("payment")}
          className={`text-[11px] font-['Inter:Semi_Bold',sans-serif] font-semibold px-3 py-1.5 rounded-full transition-colors ${
            page === "payment"
              ? "bg-[#101828] text-white"
              : "text-[#475467] hover:text-[#101828]"
          }`}
        >
          Page 2 — Payment Instructions
        </button>
      </div>

      {page === "invoice" ? <InvoicePage /> : <PaymentPage />}
    </div>
  );
}

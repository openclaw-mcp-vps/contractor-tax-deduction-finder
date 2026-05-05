import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ContractorTax – Find Tax Deductions for Freelancers",
  description: "Scan expenses, identify deductible items, estimate tax savings, and generate reports for your accountant. Built for freelancers, contractors, and gig workers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c2eb8f4a-da9d-4323-8635-8ac0f7f872d1"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}

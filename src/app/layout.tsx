import "./globals.css";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Welcome ● Yuri Mascarenhas | Cyber Security Portfolio",
  description:
    "Portfolio and CV of Yuri Mascarenhas, Cyber Security Governance professional specializing in Cyber Risk Management and Secure Web Application Development",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body className="bg-gray-50 text-gray-900">
        <Navbar />
        <main className="max-w-5xl mx-auto px-4 py-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

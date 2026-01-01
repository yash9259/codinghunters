import { ReactNode } from "react";
import { MessageCircle } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />

      <a
        href="https://wa.me/919106433706"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-4 sm:right-6 z-40 flex items-center justify-center rounded-full bg-green-500 p-3 text-white shadow-[0_12px_32px_rgba(16,185,129,0.32)] transition duration-200 hover:translate-y-[-2px] hover:shadow-[0_16px_38px_rgba(16,185,129,0.36)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-300 animate-float"
        aria-label="Chat with CodingHunters on WhatsApp"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
          <MessageCircle className="h-6 w-6" />
        </span>
      </a>
    </div>
  );
};

export default Layout;

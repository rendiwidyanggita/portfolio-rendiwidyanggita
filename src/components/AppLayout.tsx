"use client";

import Navbar from "./Navbar";
import Footer from "./Footer";
import ContactModal from "./ContactModal";
import { ContactProvider, useContact } from "@/context/ContactContext";

function AppLayoutContent({ children }: { children: React.ReactNode }) {
  const { isOpen, close } = useContact();

  return (
    <>
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
      <ContactModal isOpen={isOpen} onClose={close} />
    </>
  );
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <ContactProvider>
      <AppLayoutContent>{children}</AppLayoutContent>
    </ContactProvider>
  );
}

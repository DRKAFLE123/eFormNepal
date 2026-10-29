"use client";

import React, { useState } from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AssistanceModal from "@/components/AssistanceModal";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { VERIFIED_CONTACT } from "@/data/services";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeServiceId, setActiveServiceId] = useState<string | undefined>(undefined);

  const handleOpenAssistance = (serviceId?: string) => {
    setActiveServiceId(serviceId);
    setModalOpen(true);
  };

  return (
    <LanguageProvider>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Header onOpenAssistance={handleOpenAssistance} />
        
        <main style={{ flex: 1 }}>
          {React.isValidElement(children)
            ? React.cloneElement(children as React.ReactElement<{ onOpenAssistance?: (id?: string) => void }>, {
                onOpenAssistance: handleOpenAssistance,
              })
            : children}
        </main>

        <Footer />

        {/* Global Assistance Modal */}
        <AssistanceModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          preselectedServiceId={activeServiceId}
        />

        {/* Floating Quick WhatsApp Button on Mobile & Desktop */}
        <a
          href={VERIFIED_CONTACT.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-whatsapp-fab"
          aria-label="Direct WhatsApp Assistance 9865575108"
        >
          <WhatsAppIcon size={30} />
          <span className="fab-tooltip">
            WhatsApp: 9865575108
          </span>
        </a>
      </div>
    </LanguageProvider>
  );
}

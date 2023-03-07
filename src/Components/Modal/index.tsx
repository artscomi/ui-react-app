/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { Close } from "Components/Icons/Close";
import { Form } from "./Form";
import { ModalContent } from "./styles";
import { ModalButtonSection } from "./ModalButtonSection";
import { ModalButtonTypes } from "types";

export const Modal: React.FC<{ onClose: VoidFunction }> = ({ onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const [activeTreatment, setActiveTreatment] = useState<ModalButtonTypes>("nails");
  const handleClick = (treatment: ModalButtonTypes) => {
    setActiveTreatment(treatment);
  };

  return (
    <ModalContent
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: 50, opacity: 0 }}
      exit={{ y: 50, opacity: 0 }}
    >
      <button
        css={{ position: "absolute", right: 20, top: 20 }}
        onClick={onClose}
        aria-label="Close modal dialog"
      >
        <Close />
      </button>
      <h2 css={{ fontSize: "1.5rem", fontWeight: 700, paddingBottom: 32 }}>Search</h2>

      <ModalButtonSection handleClick={handleClick} activeTreatment={activeTreatment} />
      <Form treatment={activeTreatment} />
    </ModalContent>
  );
};

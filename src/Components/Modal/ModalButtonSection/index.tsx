/** @jsxImportSource @emotion/react */
import { Nails } from "Components/Icons/Nails";
import { Scissors } from "Components/Icons/Scissors";
import { Stars } from "Components/Icons/Stars";
import { ModalButtonTypes } from "types";
import { ModalButton } from "./ModalButton";
import { ModalButtonSectionStyle } from "./styles";

export const ModalButtonSection: React.FC<{
  handleClick: (treatment: ModalButtonTypes) => void;
  activeTreatment: ModalButtonTypes;
}> = ({ handleClick, activeTreatment }) => {
  return (
    <ModalButtonSectionStyle>
      <ModalButton
        Icon={() => <Scissors />}
        label="Hair"
        treatment="hair"
        activeTreatment={activeTreatment}
        handleClick={handleClick}
      />
      <ModalButton
        Icon={() => <Nails />}
        label="Nails"
        treatment="nails"
        activeTreatment={activeTreatment}
        handleClick={handleClick}
      />
      <ModalButton
        Icon={() => <Scissors />}
        label="Skin"
        treatment="skin"
        activeTreatment={activeTreatment}
        handleClick={handleClick}
      />
      <ModalButton
        Icon={() => <Stars />}
        label="Beauty"
        treatment="beauty"
        activeTreatment={activeTreatment}
        handleClick={handleClick}
      />
    </ModalButtonSectionStyle>
  );
};

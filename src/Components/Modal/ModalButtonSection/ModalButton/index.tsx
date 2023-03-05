/** @jsxImportSource @emotion/react */
import { flexCenter } from "Style/shared-styles";
import { theme } from "Theme/theme";
import { ModalButtonTypes } from "types";

export const ModalButton: React.FC<{
  Icon: React.FC;
  label: string;
  activeTreatment: ModalButtonTypes;
  treatment: ModalButtonTypes;
  handleClick: (activeTreatment: ModalButtonTypes) => void;
}> = ({ Icon, label, treatment, handleClick, activeTreatment }) => {

  return (
    <button
      css={{
        ...flexCenter(12),
        borderRadius: 100,
        padding: 12,
        outline: `1px solid`,
        outlineColor:
        activeTreatment === treatment ? theme.colors.secondary : theme.colors.greyLight,
        outlineWidth: activeTreatment === treatment ? 2 : 1,
      }}
      onClick={() => handleClick(treatment)}
    >
      <Icon />
      <span>{label}</span>
    </button>
  );
};

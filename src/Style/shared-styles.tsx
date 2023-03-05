import styled from "@emotion/styled";
import { theme } from "Theme/theme";

export const baseRadius = 4;
export const headerHeight = 200;

export const flexBetween = (gap?: number) => ({
  display: "flex",
  justifyContent: "space-between",
  gap,
});

export const flexCenter = (gap?: number) => ({
  display: "flex",
  alignItems: "center",
  gap,
});

export const baseCard = {
  boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.12)",
  padding: 16,
  borderRadius: baseRadius,
  backgroundColor: theme.colors.white,
};

export const CtaPrimary = styled.button<{ fullColor?: boolean }>(
  ({ fullColor }) => ({
    color: fullColor ? theme.colors.white : theme.colors.tertiary,
    backgroundColor: fullColor ? theme.colors.secondary : "",
    border: "1px solid",
    borderRadius: 10,
    width: "100%",
    padding: 12,
    textAlign: "center",
  })
);

export const CtaSecondary = styled.div({
  color: theme.colors.white,
  border: "1px solid",
  borderColor: "rgba(0,0,0,0)",
  borderRadius: 100,
  padding: "5px 8px",
  textAlign: "center",
  fontSize: 12,
  fontWeight: 700,
  width: "auto",
});

export const Input = styled.input<{
  hasBorder?: boolean;
  icon: string;
  iconRight?: boolean;
}>(({ hasBorder, icon, iconRight }) => {
  const xPos = iconRight ? "15px" : "95%";
  return {
    background: `${theme.colors.white} url('images/input/${icon}.svg') no-repeat scroll ${xPos} center`,
    height: 48,
    border: hasBorder ? `1px solid ${theme.colors.greyLighter}` : 0,
    borderRadius: 10,
    maxWidth: "100%",
    paddingLeft: iconRight ? 44 : 12,
    paddingRight: iconRight ? 0 : 44,
    "&::placeholder": {
      color: theme.colors.greyDark,
      fontSize: 14,
    },
  };
});
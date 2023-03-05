import styled from "@emotion/styled";
import { baseRadius } from "Style/shared-styles";
import { theme } from "Theme/theme";

export const NailArtWrapper = styled.div(() => ({
  position: "relative",
  borderRadius: baseRadius,
  display: "inline-block",
  left: "50%",
  transform: "translateX(-50%)",
  marginBottom: 16,
  "&:after": {
    content: "''",
    display: "block",
    height: 100,
    width: "100%",
    bottom: 0,
    position: "absolute",
    background:
      "linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%)",
  },
}));

export const NailArtContent = styled.div(() => ({
  color: theme.colors.white,
  position: "absolute",
  width: "100%",
  bottom: 0,
  zIndex: 1,
  padding: "24px 24px 32px 24px",
}));

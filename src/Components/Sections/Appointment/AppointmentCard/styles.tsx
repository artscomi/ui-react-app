import styled from "@emotion/styled";
import { baseCard } from "Style/shared-styles";
import { theme } from "Theme/theme";

export const Card = styled.section({
  ...baseCard,
  marginBottom: 53,
  "&:after": {
    position: "absolute",
    content: "''",
    display: "block",
    height: 142,
    backgroundColor: theme.colors.secondaryLight,
    left: 0,
    right: 0,
    transform: "translateY(-70%)",
    zIndex: -1,
  },
});

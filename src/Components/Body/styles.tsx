import styled from "@emotion/styled";
import { theme } from "Theme/theme";

export const BodyStyle = styled.main(() => ({
  marginTop: -4,
  zIndex: 0,
  position: 'relative',
  borderTopRightRadius: 4,
  borderTopLeftRadius: 4,
  backgroundColor: theme.colors.white,
  paddingLeft: theme.spacings.m,
  paddingRight: theme.spacings.m,
  paddingTop: theme.spacings.m,
  paddingBottom: theme.spacings.s,
}));

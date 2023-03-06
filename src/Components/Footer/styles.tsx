import styled from "@emotion/styled";
import { theme } from "Theme/theme";

export const FooterStyle = styled.footer(() => ({
  display: "flex",
  justifyContent: "space-around",
  margin: "0 auto",
  backgroundColor: theme.colors.white,
  paddingLeft: theme.spacings.m,
  paddingRight: theme.spacings.m,
  paddingTop: theme.spacings.s,
  paddingBottom: theme.spacings.s,
  width: "100%",
  position: "relative",
  boxShadow: "0px -4px 30px rgba(0, 0, 0, 0.1)",
}));

export const FooterButton = styled.button<{ isActive: boolean }>(
  ({ isActive }) => ({
    margin: "0 auto",
    backgroundColor: theme.colors.white,
    padding: theme.spacings.s,
    width: "100%",
    fontSize: 10,
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    gap: theme.spacings.s,
    transition: "color .2s ease",
    color: isActive ? theme.colors.secondary : theme.colors.greyLight,
  })
);

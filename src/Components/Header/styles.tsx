import styled from "@emotion/styled";
import { theme } from "Theme/theme";

export const HeaderStyle = styled.header<{ isScrolled: boolean }>(
  ({ isScrolled }) => ({
    backgroundColor: isScrolled ? theme.colors.secondary : "transparent",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    boxShadow: isScrolled ? "0px 40px 40px rgba(0, 0, 0, 0.12)" : "",
    paddingBottom: isScrolled ? 16 : 32,
    paddingTop: 16,
    position: "sticky",
    display: "flex",
    top: 0,
    flexDirection: "column",
    transition: "all .2s",
    zIndex: 1,
  })
);

export const HeaderBgImage = styled.div({
  background: "url('images/header.png') no-repeat center",
  backgroundSize: "cover",
  height: 210,
  position: "fixed",
  top: 0,
  right: 0,
  left: 0,
  zIndex: 0,
});

export const Logo = styled.img({
  alignSelf: "center",
  zIndex: 1,
  position: "relative",
  display: "block",
  margin: "0 auto",
  paddingBottom: 24,
  paddingTop: 64,
});

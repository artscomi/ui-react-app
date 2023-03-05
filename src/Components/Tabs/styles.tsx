import styled from "@emotion/styled";
import { theme } from "Theme/theme";

export const TabsWrapper = styled.div({
  display: "flex",
  justifyContent: "space-between",
});

export const Tab = styled.button<{ active: boolean }>(({ active }) => ({
  textAlign: "center",
  flex: 1,
  color: active ? theme.colors.primary : theme.colors.greyLighter,
  padding: 16,
  position: "relative",
}));

export const TabsPanelWrapper = styled.div({
  scrollbarWidth: "none",
  margin: "0 -16px 0 -16px",
  padding: "24px 16px 0 16px",
  msOverflowStyle: "none",
  overflow: "scroll",

  "&::-webkit-scrollbar": {
    display: "none",
  },
});

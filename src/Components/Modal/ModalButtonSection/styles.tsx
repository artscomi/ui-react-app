import styled from "@emotion/styled";

export const ModalButtonSectionStyle = styled.div({
  scrollbarWidth: "none",
  margin: "0 -16px 0 -16px",
  padding: "24px 16px",
  msOverflowStyle: "none",
  overflow: "scroll",

  "&::-webkit-scrollbar": {
    display: "none",
  },

  display: "flex",
  gap: 16,
  flexWrap: "nowrap",
});

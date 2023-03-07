import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { theme } from "Theme/theme";

export const ModalContent = styled(motion.dialog)({
  position: "fixed",
  top: "0",
  right: "0",
  bottom: "0",
  left: "0",
  height: "100vh",
  background: theme.colors.white,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  zIndex: 2,
  padding: "24px 26px",
});

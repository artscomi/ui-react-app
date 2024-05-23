import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const shine = keyframes({
  to: { backgroundPositionX: "-200%" },
});

export const Skeleton = styled.div({
  backgroundColor: "#eee",
  background: "linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%)",
  borderRadius: "5px",
  backgroundSize: "200% 100%",
  animation: `1.5s ${shine} linear infinite`,
  display: "inline-block",
  overflow: "hidden",
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
});

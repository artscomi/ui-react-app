import { ThemeProvider } from "@emotion/react";
import { PropsWithChildren } from "react";
import { theme } from "Theme/theme";

export const EmotionThemeProvider: React.FC<PropsWithChildren<unknown>> = ({
  children,
}) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

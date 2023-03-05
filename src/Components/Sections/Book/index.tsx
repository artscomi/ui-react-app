/** @jsxImportSource @emotion/react */

import { Tabs } from "Components/Tabs";
import { theme } from "Theme/theme";

export const BookSection: React.FC = () => {
  return (
    <>
      <h2 css={{ paddingBottom: 8, fontSize: 20, fontWeight: 700 }}>
        Ready to book again?
      </h2>
      <p
        css={{ paddingBottom: 24, fontSize: 14, color: theme.colors.greyLight }}
      >
        Salons are waiting for you!
      </p>

      <Tabs />
    </>
  );
};

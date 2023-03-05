/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { motion } from "framer-motion";
import { BookCard } from "Components/Sections/Book/Card";
import { Tab, TabsPanelWrapper, TabsWrapper } from "./styles";
import { theme } from "Theme/theme";
import React from "react";
import { flexCenter } from "Style/shared-styles";

const TABS_DATA = [
  {
    name: "Hair",
    cards: [<BookCard key={1} image="one" />, <BookCard key={2} image="one" />],
  },
  { name: "Nails", cards: [<BookCard key={1} image="two" />] },
  {
    name: "Wellness",
    cards: [
      <BookCard key={1} image="three" />,
      <BookCard key={2} image="three" />,
      <BookCard key={3} image="three" />,
    ],
  },
];

export const Tabs = () => {
  const [active, setActive] = useState(TABS_DATA[0].name);

  return (
    <>
      <TabsWrapper>
        {TABS_DATA.map(({ name }) => (
          <Tab
            key={name}
            active={active === name}
            onClick={() => setActive(name)}
          >
            {name}
            {active === name && (
              <motion.div
                css={{
                  position: "absolute",
                  bottom: "-1px",
                  left: "0",
                  right: "0",
                  height: "1px",
                  background: theme.colors.secondary,
                }}
                layoutId="underline"
              />
            )}
          </Tab>
        ))}
      </TabsWrapper>
      <p />

      <TabsPanelWrapper css={flexCenter(16)}>
        {TABS_DATA.map(({ name, cards }) =>
          active === name ? (
            <React.Fragment key={name}>{cards}</React.Fragment>
          ) : null
        )}
      </TabsPanelWrapper>
    </>
  );
};

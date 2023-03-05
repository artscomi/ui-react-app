/** @jsxImportSource @emotion/react */
import { BookCard } from "Components/Sections/Book/Card";
import { motion } from "framer-motion";
import { useState } from "react";
import { flexCenter } from "Style/shared-styles";
import { Tab, TabsPanelWrapper, TabsWrapper } from "./styles";
import { theme } from "Theme/theme";

const types = ["Hair", "Nails", "Wellness"];
export const Tabs = () => {
  const [active, setActive] = useState(types[0]);
  return (
    <>
      <TabsWrapper>
        {types.map((type) => (
          <Tab
            key={type}
            active={active === type}
            onClick={() => setActive(type)}
          >
            {type}
            {active === type ? (
              <motion.div
                css={{
                  position: "absolute",
                  bottom: "-1px",
                  left: "0",
                  right: "0",
                  height: "1px",
                  background: theme.colors.secondary,
                }}
                className="underline"
                layoutId="underline"
              />
            ) : null}
          </Tab>
        ))}
      </TabsWrapper>
      <p />

      <TabsPanelWrapper css={{ ...flexCenter(16) }}>
        {active === "Hair" && (
          <>
            <BookCard />
            <BookCard />
          </>
        )}
        {active === "Nails" && (
          <>
            <BookCard />
          </>
        )}
        {active === "Wellness" && (
          <>
            <BookCard />
            <BookCard />
            <BookCard />
          </>
        )}
      </TabsPanelWrapper>
    </>
  );
};

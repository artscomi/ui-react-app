/** @jsxImportSource @emotion/react */

import { Clock } from "Components/Icons/Clock";
import { OffPeak } from "Components/Icons/OffPeak";
import { useState } from "react";
import { baseCard, CtaSecondary, flexCenter } from "Style/shared-styles";
import { theme } from "Theme/theme";
import { Skeleton } from "./styles";

export const BookCard: React.FC<{ image: string }> = ({ image }) => {
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);

  return (
    <section
      css={{ ...baseCard, width: 310, flexShrink: 0, marginBottom: 32 }}
      data-testid="book-card"
    >
      <div css={{ position: "relative", width: 278, height: 114 }}>
        {!isImageLoaded && <Skeleton />}

        <img
          src={`images/book-card-${image}.png`}
          alt=""
          onLoad={() => setIsImageLoaded(true)}
        />
      </div>

      <section css={{ padding: "1rem" }}>
        <header>
          <h2 css={{ fontSize: "1rem", paddingBottom: "1rem" }}>
            Nynphea Spa di Luca Aloisi e Mario Liti Caputo
          </h2>
        </header>

        <section>
          <p
            css={{
              fontSize: "0.75rem",
              paddingBottom: 8,
              color: theme.colors.greyDark,
            }}
          >
            Via Santa Trinità, 22 - Milano (1,3 km)
          </p>
          <div css={[{ ...flexCenter(4) }, { paddingBottom: 21 }]}>
            <Clock />
            <p css={{ fontSize: "0.75rem", fontWeight: 700 }}>4.7</p>
            <p css={{ fontSize: "0.75rem", color: theme.colors.greyLight }}>
              171 reviews
            </p>
          </div>
        </section>

        <footer css={{ ...flexCenter(12) }}>
          <CtaSecondary css={{ backgroundColor: theme.colors.secondary }}>
            Top rated 2020
          </CtaSecondary>
          <div css={{ ...flexCenter(4) }}>
            <OffPeak />
            <p css={{ fontSize: "0.75rem" }}>Off peak</p>
          </div>
        </footer>
      </section>
    </section>
  );
};

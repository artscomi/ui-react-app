/** @jsxImportSource @emotion/react */
import { Clock } from "Components/Icons/Clock";
import { OffPeak } from "Components/Icons/OffPeak";
import { baseCard, CtaSecondary, flexCenter } from "Style/shared-styles";
import { theme } from "Theme/theme";

export const BookCard: React.FC<{ image: string }> = ({ image }) => {
  return (
    <section
      css={{ ...baseCard, width: 310, flexShrink: 0, marginBottom: 32 }}
      data-testid="book-card"
    >
      <img src={`images/book-card-${image}.png`} alt="" />
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

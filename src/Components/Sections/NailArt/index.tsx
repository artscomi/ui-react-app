/** @jsxImportSource @emotion/react */
import { Lesson } from "Components/Icons/Lesson";
import { Webinar } from "Components/Icons/Webinar";
import { baseRadius, CtaSecondary, flexBetween, flexCenter } from "Style/shared-styles";
import { theme } from "Theme/theme";
import { NailArtContent, NailArtWrapper } from "./styles";

export const NailArt: React.FC = () => (
  <>
    <NailArtWrapper>
      <img
        css={{ borderRadius: baseRadius, display: "block" }}
        src="images/nail-art.png"
        alt=""
      />
      <NailArtContent>
        <p
          css={{
            paddingBottom: 24,
            fontWeight: 700,
            fontSize: "2rem",
            lineHeight: 1,
          }}
        >
          Nail art secrets and new technique
        </p>
        <div css={[{ ...flexBetween(15) }, { fontSize: "0.75rem" }]}>
          <CtaSecondary css={{ backgroundColor: theme.colors.accent }}>
            Top rated 2021
          </CtaSecondary>
          <div css={flexCenter(4)}>
            <Lesson />
            <span>Classes</span>
          </div>
          <div css={flexCenter(4)}>
            <Webinar />
            <span>Webinar</span>
          </div>
        </div>
      </NailArtContent>
    </NailArtWrapper>
  </>
);

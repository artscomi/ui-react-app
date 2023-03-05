/** @jsxImportSource @emotion/react */
import { Calendar } from "Components/Icons/Calendar";
import { Clock } from "Components/Icons/Clock";
import { CtaPrimary, flexBetween, flexCenter } from "Style/shared-styles";
import { theme } from "Theme/theme";
import { Card } from "./styles";

export const AppointmentCard = () => {
  return (
    <Card>
      <header
        css={{
          ...flexBetween(),
          borderBottom: `2px solid ${theme.colors.grey}`,
          paddingBottom: 16,
          marginBottom: 16,
        }}
      >
        <div css={flexCenter(4)}>
          <Calendar />
          <p css={{ fontSize: 12 }}>13/12/2021</p>
        </div>
        <div css={flexCenter(4)}>
          <Clock />
          <p css={{ fontSize: 12 }}>15:30</p>
        </div>
        <div css={flexCenter(4)}>
          <Clock />
          <p css={{ fontSize: 12 }}>Pay at the venue</p>
        </div>
      </header>
      <section css={{ paddingBottom: 24, ...flexBetween() }}>
        <div>
          <h2 css={{ fontSize: 16, fontWeight: 700, paddingBottom: 8 }}>
            White Rabbit Salon
          </h2>
          <p css={{ fontSize: 14, color: theme.colors.greyLight }}>
            Haircut and fast blow dry
          </p>
        </div>
        <img src="images/logo-rounded.png" alt="" />
      </section>
      <footer>
        <CtaPrimary>See details</CtaPrimary>
      </footer>
    </Card>
  );
};

/** @jsxImportSource @emotion/react */
import { theme } from "Theme/theme";
import { AppointmentCard } from "./AppointmentCard";

export const AppointmentSection: React.FC = () => (
  <>
    <div
      css={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        fontSize: 24,
        fontWeight: 700,
        paddingBottom: 20,
      }}
    >
      <img src="images/avatar/arlene.png" alt="" />
      <h1>
        Hey, <span css={{ color: theme.colors.secondary }}>Arlene!</span>
      </h1>
    </div>

    <p
      css={{ fontWeight: 700, color: theme.colors.greyDark, paddingBottom: 16 }}
    >
      Your next appointment
    </p>

    <AppointmentCard />
  </>
);

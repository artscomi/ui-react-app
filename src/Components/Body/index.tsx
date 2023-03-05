/** @jsxImportSource @emotion/react */
import { AppointmentSection } from "Components/Sections/Appointment";
import { BookSection } from "Components/Sections/Book";
import { NailArt } from "Components/Sections/NailArt";
import { BodyStyle } from "./styles";

export const Body: React.FC = () => (
  <BodyStyle>
    <AppointmentSection />
    <BookSection />
    <NailArt />
  </BodyStyle>
);

/** @jsxImportSource @emotion/react */
import { Calendar } from "Components/Icons/Calendar";
import { Heart } from "Components/Icons/Heart";
import { User } from "Components/Icons/User";
import { Venue } from "Components/Icons/Venue";
import { useState } from "react";
import { theme } from "Theme/theme";
import { FooterButton, FooterStyle } from "./styles";

const FOOTER_BUTTONS = [
  { icon: <Venue />, label: "Home", id: 1 },
  { icon: <Heart />, label: "Favorites", id: 2 },
  { icon: <Calendar />, label: "Booking", id: 3 },
  { icon: <User />, label: "Profile", id: 4 },
];

export const Footer: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const handleButtonClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <FooterStyle>
      {FOOTER_BUTTONS.map(({ icon, label, id }, index) => (
        <FooterButton
          key={id}
          isActive={selectedIndex === index}
          onClick={() => handleButtonClick(index)}
        >
          {icon}
          <p css={{ fontWeight: 700 }}>{label}</p>
        </FooterButton>
      ))}
    </FooterStyle>
  );
};

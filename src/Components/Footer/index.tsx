/** @jsxImportSource @emotion/react */
import { Calendar } from "Components/Icons/Calendar";
import { Heart } from "Components/Icons/Heart";
import { User } from "Components/Icons/User";
import { Venue } from "Components/Icons/Venue";
import { theme } from "Theme/theme";
import { FooterButton, FooterStyle } from "./styles";

const buttonTextColor = { color: theme.colors.greyLight };

export const Footer: React.FC = () => (
  <FooterStyle>
    <FooterButton>
      <Venue />
      <p css={{ fontWeight: 700 }}>Home</p>
    </FooterButton>

    <FooterButton>
      <Heart />
      <p css={buttonTextColor}>Favorites</p>
    </FooterButton>

    <FooterButton>
      <Calendar />
      <p css={buttonTextColor}>Booking</p>
    </FooterButton>

    <FooterButton>
      <User />
      <p css={buttonTextColor}>Profile</p>
    </FooterButton>
  </FooterStyle>
);

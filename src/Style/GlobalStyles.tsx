import { css, Global } from "@emotion/react";

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        @font-face {
          font-family: "TreatwellSansWeb";
          font-style: normal;
          font-weight: 400;
          src: url("../fonts/TreatwellSansWeb-Regular.woff") format("woff"),
            url("../fonts/TreatwellSansWeb-Regular.woff2") format("woff2");
        }

        @font-face {
          font-family: "TreatwellSansWeb";
          font-style: normal;
          font-weight: 700;
          src: url("../fonts/TreatwellSansWeb-Bold.woff") format("woff"),
            url("../fonts/TreatwellSansWeb-Bold.woff2") format("woff2");
        }

        button {
          all: unset;
          box-sizing: border-box;
        }

        * {
          box-sizing: border-box;
          font-family: TreatwellSansWeb, sans-serif;
        }

        img {
          max-width: 100%;
          height: auto;
        }

        html,
        body,
        div,
        span,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        a,
        article,
        aside,
        canvas,
        details,
        embed,
        figure,
        figcaption,
        footer,
        header,
        hgroup,
        menu,
        nav {
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 100%;
          vertical-align: baseline;
        }
      `}
    />
  );
};

export default GlobalStyles;

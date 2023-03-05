/** @jsxImportSource @emotion/react */
import { Body } from "Components/Body";
import { Footer } from "Components/Footer";
import { HeaderBgImage, HeaderStyle, Logo } from "Components/Header/styles";
import { Modal } from "Components/Modal";
import { AnimatePresence } from "framer-motion";
import { useHandleScroll } from "Hooks/useHandleScroll";
import { useRef, useState } from "react";
import GlobalStyles from "Style/GlobalStyles";
import { Input } from "Style/shared-styles";

function App() {
  const [isScrolled, setScrolled] = useState(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useHandleScroll((scrollY) => {
    if (ref.current && scrollY >= ref.current?.offsetTop - 2) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <div className="App">
      <GlobalStyles />
      <HeaderBgImage />
      <Logo src="images/logo.svg" alt="" width={130} height={24} />

      <HeaderStyle isScrolled={isScrolled} ref={ref}>
        <Input
          disabled={showModal}
          iconRight
          icon="search"
          css={{ marginLeft: 20, marginRight: 20 }}
          placeholder="Find your next treatment"
          onFocus={() => setShowModal(true)}
        />
      </HeaderStyle>

      <Body />
      <Footer />
      <AnimatePresence>
        {showModal && <Modal onClose={() => setShowModal(false)} />}
      </AnimatePresence>
    </div>
  );
}

export default App;

import "./App.css";
import { Container } from "@chakra-ui/react";
import Home from "./containers/home/home";
import About from "./containers/about/about";
import NavbarDesktop from "./components/navbar/desktop/navbar-desktop";
import Pricing from "./containers/pricing/pricing";
import Contact from "./containers/contact/contact";
import { useScreenDetector } from "./hooks/useScreenDetector";
import NavbarMobile from "./components/navbar/mobile/navbar-mobile";
import { ScrollProvider } from "./providers/scroll.providers";

function App() {
  const { isMobile } = useScreenDetector();
  return (
    <ScrollProvider>
      <Container maxW="full" h="100vh" px={0}>
        {isMobile ? <NavbarMobile /> : <NavbarDesktop />}
        <Home />
        <About />
        <Pricing />
        <Contact />
      </Container>
    </ScrollProvider>
  );
}

export default App;

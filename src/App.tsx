import { Homepage } from "./pages/Homepage"
import { About } from "./pages/About"
import { Services } from "./pages/Services"
import { Contact } from "./pages/Contact"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer";
import { Element } from "react-scroll";

function App() {
  return (
    <div className="bg-gradient-to-r from-white to-[#F9FBFF] flex flex-col gap-16">
      <Navbar />
      <Element name="homepage"><Homepage /></Element>
      <Element name="servicespage"><Services /></Element>
      <Element name="aboutpage"><About /></Element>
      <Element name="contactpage"><Contact /></Element>
      <Footer />
    </div>
  )
};

export default App

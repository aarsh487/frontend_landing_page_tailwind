import { useNavigate } from "react-router-dom";
import { Branding, ProductDesign, Uiux, WebDesign } from "../icons/icons";

export const Services = () => {
  const navigate = useNavigate();
  return (
    <div>
      <header className="w-full flex justify-between items-center p-16">
        <div className="flex items-center text-4xl font-bold">
          <h1>Project</h1>
          <span className="text-[#03A3F0] text-6xl pb-4">.</span>
        </div>
        <nav className="flex items-center gap-8">
          <ul className="flex items-center gap-8 list-none text-lg font-semibold text-slate-500">
            <li
              className="cursor-pointer hover:text-slate-800"
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className="cursor-pointer hover:text-slate-800"
              onClick={() => navigate("/services")}
            >
              Services
            </li>
            <li
              className="cursor-pointer hover:text-slate-800"
              onClick={() => navigate("/about")}
            >
              About
            </li>
            <li
              className="cursor-pointer hover:text-slate-800"
              onClick={() => navigate("/contact")}
            >
              Contact
            </li>
          </ul>
          <button className="bg-gradient-to-r from-[#005AD3] to-[#00B4FC] px-6 py-2 rounded-full shadow-lg text-white text-lg font-semibold hover:scale-105 transition-transform">
            Sign In
          </button>
        </nav>
      </header>

      <div className="">
        <h4 className="text-2xl font-semibold text-center text-slate-500">Our Services</h4>
        <h1 className="font-bold text-8xl text-center mt-8">Grow Business</h1>
        <h1 className="font-lighter text-6xl text-center mt-4">With Project.</h1>
      </div>
      <div className="flex justify-evenly">
        <div className="relative w-64 h-96 flex flex-col items-center justify-center gap-4 shadow-lg hover:-translate-y-1 transition-all ease-in-out duration-500">
          <img className="relative" src="src/assets/images/about-icon-bg-1.png"></img>
          <div className="w-12 absolute top-[100px]">
            <Uiux />
          </div>
          <h4 className="text-2xl font-semibold">UI/UX Design</h4>
          <p className="text-slate-500 text-sm text-center">Landing Pages, User Flow,<br /> Wireframing, Prototyping,<br /> Mobile AppDesign, Web App</p>
        </div>
        <div className="relative w-64 h-96 flex flex-col items-center justify-center gap-4 shadow-lg hover:-translate-y-1 transition-all ease-in-out duration-500">
          <img className="relative" src="src/assets/images/about-icon-bg-2.png"></img>
          <div className="w-10 absolute top-[100px]">
            <Branding />
          </div>
          <h4 className="text-2xl font-semibold">Branding</h4>
          <p className="text-slate-500 text-sm text-center">Landing Pages, User Flow,<br /> Wireframing, Prototyping,<br /> Mobile AppDesign, Web App</p>
        </div>
        <div className="relative w-64 h-96 flex flex-col items-center justify-center gap-4 shadow-lg hover:-translate-y-1 transition-all ease-in-out duration-500">
          <img className="relative" src="src/assets/images/about-icon-bg-3.png"></img>
          <div className="w-10 absolute top-[100px]">
            <WebDesign />
          </div>
          <h4 className="text-2xl font-semibold">Web Design</h4>
          <p className="text-slate-500 text-sm text-center">Landing Pages, User Flow,<br /> Wireframing, Prototyping,<br /> Mobile AppDesign, Web App</p>
        </div>
        <div className="relative w-64 h-96 flex flex-col items-center justify-center gap-4 shadow-lg hover:-translate-y-1 transition-all ease-in-out duration-500">
          <img className="relative" src="src/assets/images/about-icon-bg-4.png"></img>
          <div className="w-10 absolute top-[100px]">
            <ProductDesign />
          </div>
          <h4 className="text-2xl font-semibold">Product Design</h4>
          <p className="text-slate-500 text-sm text-center">Landing Pages, User Flow,<br /> Wireframing, Prototyping,<br /> Mobile AppDesign, Web App</p>
        </div>
      </div>
      
      <footer className="mt-72">
        <div className="absolute inset-y-[850px] inset-x-[550px]">
          <img src="src/assets/images/footer-banner.png" alt="footer-banner" />
        </div>
        <div className="bg-[#F8FBFF] flex justify-between items-center p-12">
          <div className="flex items-center text-4xl font-bold ml-32">
            <h1>Project</h1>
            <span className="text-[#03A3F0] text-6xl pb-4">.</span>
          </div>
          <div className="flex justify-around items-center gap-16 mr-32 text-slate-500">
            <div className="flex gap-16">
              <div className="flex flex-col gap-2">
                <span className="text-2xl">Quick Links</span>
                <div className="text-lg">
                  <h4>Home</h4>
                  <h4>Services</h4>
                  <h4>About us</h4>
                  <h4>Contact us</h4>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-2xl">Services</span>
                <div className="text-lg">
                  <h4>Ui/Ux Design</h4>
                  <h4>Branding</h4>
                  <h4>Product Design</h4>
                  <h4>Web Design</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#ECF4FF] h-20 flex justify-center items-center gap-20">
          <span>Privacy Policy</span>
          <span>Terms & Condition</span>
          <span>Made with 💛 by aarsh</span>
        </div>
      </footer>
    </div>
  );
};

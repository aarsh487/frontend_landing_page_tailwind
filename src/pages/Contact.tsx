import { useNavigate } from "react-router-dom";


export const Contact = () => {
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

      <div className="flex flex-col items-center justify-center gap-12 mb-20">
        <div className="text-2xl font-semibold text-center text-slate-500">
          <h4>Contact Us</h4>
        </div>
        <img src="src/assets/images/about-contact-banner.png" />
        <form className="flex flex-col gap-8">
          <input className="w-72 p-2 rounded-md border border-slate-500" type="text" placeholder="Name" />
          <input className="w-72 p-2 rounded-md border border-slate-500" type="text" placeholder="Email" />
          <input className="w-96 h-72 pb-60 pl-2 rounded-md border border-slate-500" type="text" placeholder="Query" />
          <button className="w-40 bg-gradient-to-r from-[#005AD3] to-[#00B4FC] px-6 py-2 rounded-full shadow-lg text-white text-lg font-semibold hover:scale-105 transition-transform" type="submit">Submit</button>
        </form>
      </div>

      <footer className="mt-80">
        <div className="absolute inset-y-[1120px] inset-x-[550px]">
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
  )
}

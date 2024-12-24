import { useNavigate } from "react-router-dom";

export const Homepage = () => {

  const navigate = useNavigate();
  return (
    <div>
      {/* Navbar */}
      <header className="w-full flex justify-between items-center p-16">
        <div className="flex items-center text-4xl font-bold">
          <h1>Project</h1>
          <span className="text-[#03A3F0] text-6xl pb-4">.</span>
        </div>
        <nav className="flex items-center gap-8">
          <ul className="flex items-center gap-8 list-none text-lg font-semibold text-slate-500">
            <li className="cursor-pointer hover:text-slate-800" onClick={() => navigate('/')}>Home</li>
            <li className="cursor-pointer hover:text-slate-800" onClick={() => navigate('/services')}>Services</li>
            <li className="cursor-pointer hover:text-slate-800" onClick={() => navigate('/about')}>About</li>
            <li className="cursor-pointer hover:text-slate-800" onClick={() => navigate('/contact')}>Contact</li>
          </ul>
          <button className="bg-gradient-to-r from-[#005AD3] to-[#00B4FC] px-6 py-2 rounded-full shadow-lg text-white text-lg font-semibold hover:scale-105 transition-transform">
            Sign In
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex relative min-h-screen pt-20">
        <div className="absolute inset-0 flex justify-end">
          <img
            src="src/assets/images/hero-banner.png"
            alt="Hero Banner"
            className="object-cover max-w-full"
          />
        </div>
        <div className="relative z-10 inset-y-40 inset-x-40 flex flex-col gap-4 tracking-tighter text-slate-800">
          <h1 className="text-[5rem] leading-4 font-thin">Empower</h1>
          <h1 className="text-[5rem] font-thin">Your Business</h1>
          <h1 className="text-[5rem] leading-4 font-semibold">
            Better & Faster.
          </h1>
        </div>
      </section>

      <footer className="mt-72">
        <div className="absolute inset-y-[970px] inset-x-[550px]">
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
};

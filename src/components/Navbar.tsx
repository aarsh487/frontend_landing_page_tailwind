import { Link } from 'react-scroll';

export const Navbar = () => {
  return (
    <div>
      <header className="w-full flex justify-between items-center p-16">
        <div className="flex items-center text-4xl font-bold">
          <h1>Project</h1>
          <span className="text-[#03A3F0] text-6xl pb-4">.</span>
        </div>
        <nav className="flex items-center gap-8">
          <ul className="flex items-center gap-8 list-none text-lg font-semibold text-slate-500">
            <Link to='homepage' smooth={true} duration={500}><li className="cursor-pointer hover:text-slate-800">Home</li></Link> 
            <Link to='servicespage' smooth={true} duration={500}><li className="cursor-pointer hover:text-slate-800">Services</li></Link> 
            <Link to='aboutpage' smooth={true} duration={700}><li className="cursor-pointer hover:text-slate-800">About</li></Link> 
            <Link to='contactpage' smooth={true} duration={1000}><li className="cursor-pointer hover:text-slate-800">Contact</li></Link> 
          </ul>
          <button className="bg-gradient-to-r from-[#005AD3] to-[#00B4FC] px-6 py-2 rounded-full shadow-lg text-white text-lg font-semibold hover:scale-105 transition-transform">
            Sign In
          </button>
        </nav>
      </header>
    </div>
  );
};

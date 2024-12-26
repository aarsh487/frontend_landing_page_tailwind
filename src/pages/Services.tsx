import { Branding, ProductDesign, Uiux, WebDesign } from "../icons/icons";


export const Services = () => {
  return (
    <div>
      <div>
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
    </div>
  );
};

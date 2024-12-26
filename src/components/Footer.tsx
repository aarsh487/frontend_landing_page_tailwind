
export const Footer = () => {
  return (
    <div>
      <footer className="relative mt-52">
        <div className="absolute bottom-32 left-[35rem] hover:bottom-[8.25rem] transition-all ease-in-out">
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
                  <h4 className="cursor-pointer hover:underline">Home</h4>
                  <h4 className="cursor-pointer hover:underline">Services</h4>
                  <h4 className="cursor-pointer hover:underline">About us</h4>
                  <h4 className="cursor-pointer hover:underline">Contact us</h4>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-2xl">Services</span>
                <div className="text-lg">
                  <h4 className="cursor-pointer hover:underline">Ui/Ux Design</h4>
                  <h4 className="cursor-pointer hover:underline">Branding</h4>
                  <h4 className="cursor-pointer hover:underline">Product Design</h4>
                  <h4 className="cursor-pointer hover:underline">Web Design</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#ECF4FF] h-20 flex justify-center items-center gap-20">
          <span className="cursor-pointer hover:underline">Privacy Policy</span>
          <span className="cursor-pointer hover:underline">Terms & Condition</span>
          <span className="cursor-pointer hover:underline">Made with 💛 by aarsh</span>
        </div>
      </footer>
    </div>
  );
};

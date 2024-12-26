
export const Homepage = () => {
  return (
    <div>
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
    </div>
  )
};

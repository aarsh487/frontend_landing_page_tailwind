
export const About = () => {
  return (
    <div>
      <section className="relative">
        <div className="text-2xl font-semibold text-center text-slate-500">
          <h4>About Us</h4>
        </div>
        <div className="absolute top-20 inset-x-40">
          <img src="src/assets/images/about-plant.png" />
        </div>
        <div className="relative text-6xl font-semibold text-center mt-2">
          <h1>A Team Of Passionate Designers</h1>
          <h1 className="mt-4">& Developers From New York.</h1>
        </div>
        <div className="ml-28 mt-4 ">
          <img src="src/assets/images/about-banner.png" /> 
        </div>
      </section>
    </div>
  )
}

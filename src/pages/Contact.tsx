
export const Contact = () => {
  return (
    <div>
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
    </div>
  )
}

import bg from '/assets/home/background-home-desktop.jpg'

function Home() {
  return (
    <div  style={{backgroundImage:`url(${bg})` }} className={`
     h-screen pt-12 flex px-12 pb-8 bg-no-repeat bg-cover bg-center flex-wrap items-center 
   sm:h-screen sm:pt-30 sm:px-10
    md:pt-40 md:px-36 md:pb-8
    lg:h-screen lg:pt-40 lg:px-36 lg:pb-36
    xl:pb-32 

   `}>
        <div className="w-full lg:w-3/6 lg:h-full flex flex-col justify-end  items-center">
            <div className="flex flex-col w-full items-center
            lg:w-[83%] lg:items-start
            xl:w-[70%]">
                <h5 className="text-[#D0D6F9] font-barlowcondensed  text-[16px] lg:text-[28px] tracking-[2.7px] lg:tracking-[4.27px] !font-extralight">SO, YOU WANT TO TRAVEL TO</h5>
                <h1 className="text-white font-bellefair leading-[160px] text-[80px] lg:text-9xl">SPACE</h1>
                <span className="text-[#D0D6F9] font-barlow lg:text-[16px] text-[15px] text-center lg:text-left  !font-extralight">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</span>
            </div>
        </div>
        <div className="lg:w-3/6 w-full h-auto lg:h-full flex justify-end flex-col items-center">
            <div className="lg:h-64 lg:w-64 h-48 w-48 cursor-pointer flex justify-center items-center rounded-full bg-white outline outline-0 outline-[#ffffff00] transition-all duration-300 ease-in-out hover:outline-[88px] hover:outline-[#ffffff50] hover:outline-opacity-50">
                <span className=" text-4xl font-bellefair text-[#0B0D17]">EXPLORE</span>
            </div>

        </div>
    </div>
  );
}

export default Home;

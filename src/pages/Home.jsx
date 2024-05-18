import bg from '/assets/home/background-home-desktop.jpg'

function Home() {
  return (
    <div  style={{backgroundImage:`url(${bg})` }} className="h-screen py-36 px-36 flex flex-wrap bg-no-repeat bg-cover bg-center ">
        <div className="w-3/6 h-full flex flex-col justify-end items-center">
            <div className="flex flex-col w-[66%]">
                <h5 className="text-[#D0D6F9] font-barlowcondensed text-[28px] tracking-[4.27px] !font-extralight">SO, YOU WANT TO TRAVEL TO</h5>
                <h1 className="text-white font-bellefair leading-[160px] text-9xl">SPACE</h1>
                <span className="text-[#D0D6F9] font-barlow text-[16px] !font-extralight">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</span>
            </div>
        </div>
        <div className="w-3/6 h-full  flex  justify-end flex-col items-center">
            <div className="h-64 w-64 cursor-pointer flex justify-center items-center rounded-full bg-white outline outline-0 outline-[#ffffff00] transition-all duration-300 ease-in-out hover:outline-[88px] hover:outline-[#ffffff50] hover:outline-opacity-50">
                <span className=" text-4xl font-bellefair text-[#0B0D17]">EXPLORE</span>
            </div>

        </div>
    </div>
  );
}

export default Home;

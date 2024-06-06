import bg from '/assets/crew/background-crew-desktop.jpg'
import { useContext, useState } from 'react';
import { DataContext } from '../hooks/dataContext';

function Crew() {
    const { crew } = useContext(DataContext);
    const [indice, setIndice] = useState(0);

    const handleClick = (index) => {
        setIndice(index);
    };

    return (
        <>
            <div style={{ backgroundImage: `url(${bg})` }} className={`
             px-2 h-screen pt-12 flex flex-col  bg-no-repeat bg-cover bg-center  items-center 
            sm:h-screen sm:pt-30 sm:px-10
             md:pt-40 md:px-20 md:pb-0
             lg:h-screen lg:pt-40 lg:px-36 lg:p-0
             xl:pb-0 

            `}>
                <div className='w-full  h-[50px]  flex items-center'>
                    <h5 className="text-[#D0D6F9]  font-barlowcondensed  text-center lg:text-left  w-full  text-base md:text-[20px] md:text-left lg:text-[28px] tracking-[4.27px] uppercase">
                        <span className=" font-bold text-neutral-600 text-base lg:text-[28px]">02</span> Meet your Crew</h5>
                </div>
                <div className='flex flex-col-reverse lg:flex-wrap lg:flex-row  w-12/12 md:flex-col sm:h-full  lg:h-[-webkit-fill-available] lg:w-full'>
                    <div className="w-full lg:w-8/12 md:w-full flex items-center md:items-start text-center justify-center gap:0 lg:gap-9 sm:flex-col flex-col-reverse ">

                        <div className=' w-[90%]  sm:w-full text-center lg:text-left pt-8 lg:w-12/12 flex flex-col gap-6'>
                            <div>
                                <h2 className=" font-bellefair text-[#D0D6F9] lg:text-[32px] md:text-[24px] text-[18px] uppercase">{crew[indice]?.role || ''}</h2>
                                <h1 className=" font-bellefair text-white text-[26px] md:text-[40px] lg:text-[32px] uppercase">{crew[indice]?.name || ''}</h1>
                            </div>
                            <p className='w-full text-center lg:text-left lg:w-5/6 md:h-auto h-auto lg:h-[160px] lg:px-0 md:px-14 font-barlow text-[15px] md:text-[16px] lg:text-[18px] leading-7 lg:leading-8 text-mainLight'>{crew[indice]?.bio || ''}</p>
                        </div>
                        <div className="w-4/6 flex lg:justify-start md:w-full justify-center font-barlowcondensed lg:pb-0 pb-0 text-mainLight text-base tracking-[2.7px]">
                            <ul className='flex'>
                                {crew && crew.map((_, index) => (
                                    <li
                                        key={index}
                                        className={`cursor-pointer h-3 w-3 bg-white opacity-15 hover:opacity-50 active:opacity-100 rounded-full m-2 mt-8 ${indice === index ? '!opacity-100 ' : ''}`}
                                        onClick={() => handleClick(index)}
                                    >

                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="w-full  lg:w-4/12 md:w-full h-full flex flex-col justify-between items-center">

                        <div className="flex flex-col w-[90%] h-full  md:h-full">

                            <div className=" flex justify-center items-end  border-b-[1px]  border-b-white border-opacity-25 md:h-full">
                                <img src={crew[indice]?.images.webp || ''} alt="" className=' h-[400px] max-h-[230px] lg:max-w-[350px] sm:max-h-[490px] sm:h-[490px] lg:h-[500px] lg:pt-0 pt-10  ' />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
}

export default Crew;

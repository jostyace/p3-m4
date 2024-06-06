/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from 'react';
import bg from '/assets/technology/background-technology-desktop.jpg'
import { DataContext } from '../hooks/dataContext.jsx';



function Technology() {
    const { technology } = useContext(DataContext);
    const [indice, setIndice] = useState(0);

    const handleClick = (index) => {
        setIndice(index);
    };

    

    return (
        <>
            <div style={{ backgroundImage: `url(${bg})` }} className="h-screen md:pt-32 pt-16 px-0 lg:pt-36 w-full flex flex-col bg-no-repeat bg-cover bg-center ">
                <div className='w-full pl-0 lg:pl-36 md:px-10   h-[50px]  flex items-center'>
                    <h5 className="text-[#D0D6F9]  font-barlowcondensed  text-center lg:text-left  w-full  text-base md:text-[20px] md:text-left lg:text-[28px] tracking-[4.27px] uppercase">

                        <span className=" font-bold text-neutral-600 text-base lg:text-[28px]" >03</span> SPACE LAUNCH 101</h5>
                </div>
                <div className='flex pl-0 lg:pl-28 md:pt-7  flex-col-reverse lg:flex-row flex-wrap lg:grow w-full'>
                    <div className=" w-full lg:flex-row lg:flex flex-col lg:w-4/6 justify-center items-center lg:gap-0 gap-9 ">
                        <div className=" h-auto py-6 lg:h-full flex justify-center items-center">
                            <ul className='flex  lg:flex-col gap-4 lg:gap-10'>
                                {technology && technology.map((_, index) => (
                                    <li
                                        key={index}
                                        className={`cursor-pointer w-10 lg:w-20 md:h-16 md:w-16 h-10  lg:h-20 flex justify-center items-center font-bellefair text-[16px] lg:text-[32px] bg-transparent border-[2px] border-white border-opacity-25 hover:border-opacity-100 rounded-full mr-0 lg:mr-5 text-white ${indice === index ? 'bg-white !text-mainDark' : ''}`}
                                        onClick={() => handleClick(index)}
                                    >
                                        {index + 1}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className=' w-full lg:px-0 md:px-20  lg:w-5/6 flex items-center justify-center flex-col gap-6'>
                            <div>
                                <h2 className=" font-barlowcondensed text-[#D0D6F9] text-center lg:text-left text text-base md:leading-[52.7px] tracking-[2.7px]">THE TERMINOLOGY…</h2>
                                <h1 className=" font-bellefair text-white md:text-[40px] text-2xl text-center lg:text-left lg:text-[56px] uppercase">{technology[indice]?.name || ''}</h1>
                            </div>
                            <p className=' lg:text-left md:leading-[28px] text-center w-[90%] font-barlow text-[15px] md:text-base lg:text-[18px]  left-6 lg:leading-8 text-mainLight'>{technology[indice]?.description || ''}</p>
                        </div>

                    </div>
                    <div className=" w-full lg:w-2/6 flex-col lg:pt-24 lg:justify-end ">
                        <img src={technology[indice]?.images.portrait || ''} alt={technology[indice]?.images.portrait || ''} className='w-full md:h-72 lg:h-[500px] h-[200px] ' />
                    </div>
                </div>
            </div>

        </>

    );
}

export default Technology;

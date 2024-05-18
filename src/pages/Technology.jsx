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
            <div style={{ backgroundImage: `url(${bg})` }} className="h-screen pt-36 flex flex-col bg-no-repeat bg-cover bg-center ">
                <div className='w-full pl-36  h-[50px]  flex items-center'>
                    <h5 className="text-[#D0D6F9] font-barlowcondensed w-full  text-[28px] tracking-[4.27px] uppercase">

                        <span className=" font-bold text-neutral-600 text-[28px]" >03</span> SPACE LAUNCH 101</h5>
                </div>
                <div className='flex pl-36  grow w-full'>
                    <div className="w-3/6  flex justify-center items-center gap-9 ">
                        <div className="h-full flex justify-center items-center">
                            <ul className='flex flex-col  gap-10'>
                                {technology && technology.map((_, index) => (
                                    <li
                                        key={index}
                                        className={`cursor-pointer w-20 h-20 flex justify-center items-center font-bellefair text-[32px] bg-transparent border-[2px] border-white border-opacity-25 hover:border-opacity-100 rounded-full mr-5 text-white ${indice === index ? 'bg-white !text-mainDark' : ''}`}
                                        onClick={() => handleClick(index)}
                                    >
                                        {index + 1}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='w-5/6 flex flex-col gap-6'>
                            <div>
                                <h2 className=" font-barlowcondensed text-[#D0D6F9] text-base tracking-[2.7px]">THE TERMINOLOGY…</h2>
                                <h1 className=" font-bellefair text-white text-[56px] uppercase">{technology[indice]?.name || ''}</h1>
                            </div>
                            <p className='w-[87%] font-barlow text-[18px] leading-8 text-mainLight'>{technology[indice]?.description || ''}</p>
                        </div>

                    </div>
                    <div className="w-3/6 flex justify-end ">
                        <img src={technology[indice]?.images.portrait || ''} alt={technology[indice]?.images.portrait || ''} className='h-5/6' />
                    </div>
                </div>
            </div>

        </>

    );
}

export default Technology;

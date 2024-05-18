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
    <div style={{ backgroundImage: `url(${bg})` }} className="h-screen pt-36 px-36 flex flex-col bg-no-repeat bg-cover bg-center ">
    <div className='w-full  h-[50px]  flex items-center'>
        <h5 className="text-[#D0D6F9] font-barlowcondensed w-full  text-[28px] tracking-[4.27px] uppercase">
            <span className=" font-bold text-neutral-600 text-[28px]">02</span> Meet your Crew</h5>
    </div>
    <div className='flex grow w-full'>
    <div className="w-7/12 flex justify-center gap-9 flex-col ">
            
            <div className='w-5/6 flex flex-col gap-6'>
                <div>
                    <h2 className=" font-bellefair text-[#D0D6F9] text-[32px] uppercase">{crew[indice]?.role || ''}</h2>
                    <h1 className=" font-bellefair text-white text-[48px] uppercase">{crew[indice]?.name || ''}</h1>
                </div>
                <p className='w-5/6 h-[160px] font-barlow text-[18px] leading-8 text-mainLight'>{crew[indice]?.bio || ''}</p>
            </div>
            <div className="w-4/6 font-barlowcondensed text-mainLight text-base tracking-[2.7px]">
                <ul className='flex'>
                {crew && crew.map((_, index) => (
                                    <li
                                        key={index}
                                        className={`cursor-pointer h-3 w-3 bg-white opacity-15 hover:opacity-50 active:opacity-100 rounded-full mr-5 ${indice === index ? '!opacity-100 ' : ''}`}
                                        onClick={() => handleClick(index)}
                                    >
                                        
                                    </li>
                                ))}
                </ul>
            </div>
        </div>
        <div className="w-5/12 flex flex-col justify-between items-center">

            <div className="flex flex-col w-full h-full">

                <div className=" w-auto flex justify-center items-end h-full">
                    <img src={crew[indice]?.images.webp || ''} alt="" className=' max-h-[74vh] ' />
                </div>
            </div>
        </div>

    </div>
</div>
  
</>
);
}

export default Crew;

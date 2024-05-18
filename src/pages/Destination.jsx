import bg from '/assets/destination/background-destination-desktop.jpg'
import { useContext, useState } from 'react';
import { DataContext } from '../hooks/dataContext';

function Destination() {
    const { destinations } = useContext(DataContext);
    const [indice, setIndice] = useState(0);
    const handleClick = (index) => {
        setIndice(index);
    };


    return (
        <>
            <div style={{ backgroundImage: `url(${bg})` }} className="h-screen pt-36 px-36 flex flex-col bg-no-repeat bg-cover bg-center ">
                <div className='w-full  h-[50px]  flex items-center'>
                    <h5 className="text-[#D0D6F9] font-barlowcondensed w-full  text-[28px] tracking-[4.27px] uppercase">
                        <span className=" font-bold text-neutral-600 text-[28px]">01</span> Pick your destination</h5>
                </div>
                <div className='flex grow w-full'>
                    <div className="w-3/6 flex flex-col justify-between items-center">

                        <div className="flex flex-col w-[66%] h-full">

                            <div className=" w-full flex justify-center items-center h-full">
                                <img src={destinations[indice]?.images.webp || ''} alt="" className=' w-[445px]' />
                            </div>
                        </div>
                    </div>
                    <div className="w-3/6 flex items-center pt-10 gap-9 flex-col ">
                        <div className="w-4/6 font-barlowcondensed text-mainLight text-base tracking-[2.7px]">
                            <ul className='flex'>
                            {destinations && destinations.map((destination, index) => (
                                    <li
                                        key={index}
                                        className={`cursor-pointer uppercase pb-2 flex justify-center items-center border-b-2 border-transparent hover:border-b-2 hover:border-white hover:border-opacity-50 mr-9 ${indice === index ? 'border-white' : ''}`}
                                        onClick={() => handleClick(index)}
                                    >
                                        {destination.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='w-4/6 flex flex-col gap-6'>
                            <h1 className=" font-bellefair  text-white text-8xl uppercase">{destinations[indice]?.name || ''}</h1>
                            <p className='w-ful font-barlow text-[16px] leading-8 text-mainLight'>{destinations[indice]?.description || ''}</p>
                        </div>
                        <div className="w-4/6  border-t-[1px] border-[#383B4B]  pt-7 flex">
                            <div className='w-3/6'>
                                <h5 className=' font-barlowcondensed text-sm text-mainLight'>AVG. DISTANCE</h5>
                                <h3 className=' font-bellefair text-[28px] text-white uppercase'>{destinations[indice]?.distance || ''}</h3>
                            </div>
                            <div className='w-3/6'>
                                <h5 className=' font-barlowcondensed text-sm text-mainLight'>EST. TRAVEL TIME</h5>
                                <h3 className=' font-bellefair text-[28px] text-white uppercase'>{destinations[indice]?.travel || ''}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Destination;

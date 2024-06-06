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
            <div style={{ backgroundImage: `url(${bg})` }} className={`
            w-full px-2 h-screen pt-12 flex flex-col bg-no-repeat bg-cover bg-center pb-16
            sm:h-full sm:pt-20 sm:px-10
             md:pt-40 md:px-36 md:h-full
             lg:h-screen lg:pt-40 lg:px-20

            `}>
                <div className={`w-full h-[50px] flex items-center`}>
                    <h5 className={`
                    text-[#D0D6F9] font-barlowcondensed text-center w-full text-base tracking-[2.7px] uppercase
                    lg:text-left lg:text-[28px] lg:tracking-[4.27px]`}>
                        <span className="font-bold text-neutral-600 text-base lg:text-[28px]">01</span> Pick your destination
                    </h5>
                </div>
                <div className='flex grow flex-wrap w-full'>
                    <div className="lg:w-3/6 w-full flex flex-col justify-between items-center">
                        <div className="flex flex-col w-[50%] lg:w-[66%] h-full">
                            <div className="pt-6 lg:pt-0 w-full flex justify-center items-center h-full">
                                <img src={destinations[indice]?.images.webp || ''} alt="" className='w-[170px] sm:w-[300px] lg:max-w-[445px]  animate-spin-slow' />
                            </div>
                        </div>
                    </div>
                    <div className="w-full text-center lg:text-left lg:w-3/6 flex lg:items-start items-center pt-10 gap-9 flex-col">
                        <div className="sm:w-4/6 w-full font-barlowcondensed text-mainLight text-base tracking-[2.7px]">
                            <ul className='flex justify-center lg:justify-start'>
                                {destinations && destinations.map((destination, index) => (
                                    <li
                                        key={index}
                                        className={`cursor-pointer uppercase pb-2 flex  border-b-2 border-transparent hover:border-b-2 hover:border-white hover:border-opacity-50 ml-2 sm:ml-5 sm:mr-5 
                                        lg:ml-0 lg:mr-9 ${indice === index ? 'border-white' : ''}`}
                                        onClick={() => handleClick(index)}
                                    >
                                        {destination.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='xl:w-4/6 lg:w-[88%] sm:w-[80%] w-[85%] flex flex-col gap-6'>
                            <h1 className="font-bellefair text-white text-3xl sm:text-6xl lg:text-6xl uppercase">{destinations[indice]?.name || ''}</h1>
                            <p className='w-full font-barlow text-[14px] sm:text-[16px] leading-8 text-mainLight'>{destinations[indice]?.description || ''}</p>
                        </div>
                        <div className="xl:w-4/6 lg:w-[88%] sm:w-[80%]   w-[85%] border-t-[1px] border-[#383B4B] pt-7 flex">
                            <div className='w-3/6'>
                                <h5 className='font-barlowcondensed text-md text-mainLight'>AVG. DISTANCE</h5>
                                <h3 className='font-bellefair text-[20px] sm:text-[28px] text-white uppercase'>{destinations[indice]?.distance || ''}</h3>
                            </div>
                            <div className='w-3/6'>
                                <h5 className='font-barlowcondensed text-md text-mainLight'>EST. TRAVEL TIME</h5>
                                <h3 className='font-bellefair text-[20px] sm:text-[28px] text-white uppercase'>{destinations[indice]?.travel || ''}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Destination;

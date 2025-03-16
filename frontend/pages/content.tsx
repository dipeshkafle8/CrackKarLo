import React from 'react';
import bg_veido from '../videos/206779_tiny.mp4'

const content = () => {
    return (
        <div className='relative h-screen'>
         <video autoPlay loop muted className='absolute w-[100%] h-[100%] object-cover z-[-1] brightness-80 rounded-b-md'>
            <source src={bg_veido} type="video/mp4"/>
         </video>
         <div className="flex flex-col text-white justify-center h-screen pl-20">
                <h1 className="text-2xl font-semibold">
                    HELLO STUDENTS
                </h1>
                <p className="text-5xl font-bold pt-2">
                    WELCOME TO OUR WEBSITE
                </p>
                <p className="text-lg pt-2">
                    We provide the best education for you
                </p>
                <button className="bg-[#a70b0b] text-white w-35 h-auto hover:bg-blue-600 px-4 py-2 rounded-full mt-4">
                    Get Started!
                </button>
                <div>
                    {/*box no. 1*/}
                    <div>

                    </div>
                     {/*box no. 2*/}
                    <div>

                    </div>
                     {/*box no. 3*/}
                    <div>

                    </div>
                     {/*box no. 4*/}
                    <div>

                    </div>
                </div>

                </div>

        </div>
        )
    }
export default content;
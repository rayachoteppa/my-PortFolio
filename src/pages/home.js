
import "aos/dist/aos.css";
import AOS from 'aos'
import { useEffect } from 'react'

import Navigation from "./navigation";


export default function Home(){

    useEffect(()=>{

        console.log(AOS);
        AOS.init({
            duration:3000
        });
        AOS.refresh();
    },[])

    return(
        <>
            <div className={` h-screen background-color  overflow-y-scroll`} >

            <div className="sm:w-1/2  w-full h-20">
                <Navigation />

                </div>

                <div className="h-full flex w-full flex-col sm:flex-row  ">

              
                <div data-aos="zoom-in-right" className='h-full sm:w-1/2 w-full'>
                  
                    {/* <div className=""> */}
                        <div className="flex relative text-center justify-center  text-40 text-gray-300  items-center h-full flex-col gap-10 sm:top-0 top-4">
                            <div className="flex gap-6 relative sm:right-28 ">
                                <h1  className = "sm:h1-text h1-textMobile">Hi </h1>
                                <div className="hi-png h-12 w-12 relative sm:top-2"></div>
                                <h1 className = "sm:h1-text h1-textMobile">I am</h1>
                            </div>
                            <div className=''>
                                <h1 className="capitalize  h1-textMobile sm:h1-text typewriter" >rayachoteppa teggi</h1>
                            </div>
                            <div className='relative left-4 w-[80%]' >
                                <h1 className="capitalize sm:h1-text h1-textMobile">i am fullstack developer</h1>
                            </div>
                        {/* </div> */}
                        </div>
                    </div>
                    <div className="home-svg sm:w-1/2 w-full h-full" data-aos="zoom-out-down"></div>
                    
                 </div>
            </div>
        </>
    )
}

{/* <div data-aos=""></div> */}

import "aos/dist/aos.css";
import AOS from 'aos'
import { useEffect } from 'react'

import Navigation from "./navigation";
import Link from "next/link";


export default function Contact(){

    useEffect(()=>{

        console.log(AOS);
        AOS.init({
            duration:3000
        });
        AOS.refresh();
    },[])

    return(
        <>
            <div className={` h-screen background-color  overflow-y-scroll overflow-x-hidden`} >

            <div className="sm:w-1/2  w-full h-20">
                <Navigation />

                </div>
            
                <div className="flex relative top-16 text-white sm:text-4xl justify-center items-center text-2xl">
                    <div className="capitalize relative fonts-header ">get in touch . . . </div>
                    <div className="=  h-1 border-2 bar relative sm:top-3"></div>
                </div>

                <div className="h-full flex w-full flex-col sm:flex-row  ">

              
               
                    <div className="contact-svg sm:w-1/2 w-full h-full relative top-20 left-[8%]" data-aos="zoom-out-down"></div>
                    
                    <div data-aos="zoom-in-right" className='h-full sm:w-1/2 w-full'>
                  
                        <div className="flex relative text-center  text-40 text-gray-300  items-center h-full flex-col gap-10 sm:top-40">
                            
                            <Link href="https://github.com/rayachoteppa/">
                            <div className="github flex justify-center items-center gap-x-5 text-xl capitalize linkBack w-80 rounded-xl ">
                                    <div className="github-png sm:h-14 sm:w-14 h-14 w-14"> </div>
                                    <div className="">github</div>
                             </div>
                            </Link>

                            <Link href="https://www.linkedin.com/in/rayachoteppa-teggi-a317b31a5/">
                                <div className="github flex justify-center items-center gap-x-5 text-xl capitalize linkBack w-80 rounded-xl">
                                    <div className="linked-png sm:h-14 sm:w-14 h-14 w-14"> </div>
                                        <div className="">linked in </div>
                                </div>
                                
                            </Link>

                            <a href="mailto:rayachoti9590teggi@gmail.com">
                                <div className="github flex justify-center items-center gap-x-8 text-xl  linkBack w-80 rounded-xl capitalize">
                                    <div className="gmail-png sm:h-14 sm:w-14 h-14 w-14"> </div>
                                        <div className="">gmail </div>
                                </div>
                                
                            </a>
                            
                        </div>
                    </div>
                 </div>
            </div>
        </>
    )
}
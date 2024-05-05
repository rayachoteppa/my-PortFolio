import Image from "next/image";
import BackImg from "../../public/images/rayachoti-profile.png"
import "aos/dist/aos.css";
import AOS from 'aos'
import { useEffect } from 'react'
import Navigation from "./navigation";
export default function About() {
    useEffect(() => {

        console.log(AOS);
        AOS.init({
            duration: 3000
        });
        AOS.refresh();
    }, [])

    let skills = [{ name: "html", class: "html" }, { name: "css", class: "css" }, { name: "javascript", class: "js" }, { name: "express js", class: "express" }, { name: "node js", class: "node" }, { name: "tailwind css", class: "tailwind" }, { name: "react js", class: "react" }, { name: "mysql", class: "sql" }, { name: "next js", class: "next" }, { name: "aws", class: "aws" },]
    return (
        <>
            <div className={` h-screen background-color overflow-y-scroll overflow-x-hidden `} >

                {/* header */}

                <div className="sm:w-1/2 w-full">
                    <Navigation />

                </div>
                <div className="flex relative top-16 text-white sm:text-4xl justify-center items-center text-2xl">
                    <div className="capitalize relative fonts-header ">about me . . . </div>
                    <div className=" h-1 border-2 bar relative top-3"></div>
                </div>

                <div className="h-full flex w-full flex-col sm:flex-row  ">

                    <div className=" sm:w-1/2 w-full sm:h-full h-[60%] w-full justify-center items-center flex " >


                        <div className="backimg h-[60%] sm:h-[60%] sm:w-[60%] w-[70%] rounded"  data-aos="fade-right"></div>
                    </div>

                    <div data-aos="zoom-in-right" className='sm:h-full h-[40%] sm:w-1/2  w-full'>
                        <div className="flex relative    text-40 text-gray-300 h-full flex-col gap-10 sm:top-10  -top-20 w-[98%]  items-center">

                            <div className="flex gap-6 relative sm:top-12 top-4 ">
                                <h1 className="sm:text-3xl text-xl fonts-content">Hello ! </h1>
                                <div className="hello-png h-8 w-8 relative "></div>

                            </div>
                            <div className="sm:justify-start justify-center flex flex-col relative sm:top-10 top-5 fonts-content text-justify w-[90%]">
                                <h3 className=" sm:text-2xl ">I am <b className="capitalize">rayachoteppa teggi</b> ,</h3>
                                <h3 className="leading-8 sm:text-xl text-md">

                                    I have done my graduation in civil Engineering and currently I am working as a full stack Developer.
                                    I am passionate developer with hands on experience in developing scalable websites/application using a wide range of front end technologies and backend technologies. I am enthusiastic about fast evolving front end world and very Passionate and would love to explore the technologies</h3>

                            </div>

                            <div className="relative top-8 w-[90%]">
                                <h2 className="sm:text-3xl text-xl capitalize underline-offset-4 underline fonts-header"> my skills</h2>

                                <div className=" flex w-full flex-wrap sm:gap-x-12 gap-x-10 gap-y-4 relative top-10 fonts-content capitalize justify-center">

                                    {skills.map(elem => {
                                        return (
                                            <div key={elem.name}>
                                                <div className={`${elem.class} sm:h-24 sm:w-20 h-14 w-14`}> </div>
                                                <h2 className="text-center relative sm:-top-4">{elem.name}</h2>
                                            </div>
                                        )
                                    })}





                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
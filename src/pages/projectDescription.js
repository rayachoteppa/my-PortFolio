
import {useRouter} from "next/router"
import Image from "next/image";
import Link from "next/link"

import LinkImg from "/public/images/link.gif"

import { Data, Hobby } from "./data";


export default function ProjectDescription(){

    let router = useRouter();



    let obj = router.query;

    
        let key = Object.keys(obj);
        if(Data[key[0]]){
             var {title,content,allTechnologies,src,gallary} = Data[key[0]];

            console.log(key);
        }

        if(Hobby[key[0]]){
            var {title,content,allTechnologies,src,gallary} = Hobby[key[0]];

           console.log(key);
       }

    

    // console.log(gallary);

    

    return(
        <>
            <div className="h-screen background-color overflow-y-scroll overflow-x-hidden">

                <div className="back sm:h-20 h-10 w-20 relative left-[5%] top-[5%] cursor-pointer" onClick={()=>router.back()}></div>
                <div className="h-full">


                    <div className="flex relative top-10 text-white sm:text-4xl justify-center items-center capitalize fonts-header gap-5 ">{title}
                    <a target = "_blank" href={src}><Image src={LinkImg} height={35} width={35} alt = "link" className="relative top-1 "/></a>
                    </div>

                    <div className="flex relative top-16 text-white sm:text-4xl justify-center items-center">
                        <div className="capitalize relative fonts-header ">overview   . . . </div>
                        <div className="w-[70%] h-1 border-2 bar relative top-3"></div>


                     </div>  

                <div className="flex relative top-28 text-white sm:text-lg justify-center w-[90%] left-[6%] text-justify">{content}</div>
                

                <div className="relative top-40">
                    <div className="flex relative  text-white justify-center items-center">
                        <div className="capitalize relative fonts-header sm:text-4xl ">technologies used   . . . </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="flex flex-col relative justify-center text-white justify-start items-start top-6"> 
                                {allTechnologies ? allTechnologies.map(elem=>{
                                return (
                                    <div key={elem} className="flex gap-2 capitalize"><input type="radio"></input>{elem}</div>
                                )
                            }) : ""}

                        </div>
                    </div>
                </div>
                    
                <div className="top-56 relative">
                <div className="flex relative  text-white justify-center items-center">
                    <div className="capitalize relative fonts-header sm:text-4xl ">gallary   . . . </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="flex flex-col relative  justify-center text-white justify-start items-start gap-10 top-10"> 
                            {gallary ? gallary.map(elem=>{
                            return (
                                <div key={elem} className="flex gap-2"><Image src={elem} width={300} height={300} alt={elem}/></div>
                            )
                        }) : ""}

                    </div>
                  </div>
                </div>
                </div> 
        </div>
        </>
    )
}
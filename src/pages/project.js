
import { Data, Hobby } from "./data";


export default function ProjectTemplate({obj}){

       if(obj){
        if(Data[obj]){
        var {title,content,technologies} = Data[obj];
        }else{
        var {title,content,technologies} = Hobby[obj];

        }
        console.log(title);
       }
    return(
        <>
            <div className="h-60 sm:w-96 w-80 project-background text-white rounded-xl flex items-center flex-col transitionP font-serif">

                <div className="relative top-4 capitalize text-xl ">{title}</div>

                <div className="w-72 h-36 overflow-hidden relative top-5 text-justify "><p className="break-words">{content ? content.length >200 ? content.slice(0,200)+"  ..." : content : ""}</p></div>
               
                <div className="flex relative top-8 w-full justify-around ">
                    {technologies ? technologies.map(elem=>{
                        return(
                            <div className="h-8 w-28 bg-black flex justify-center items-center rounded-md text-sm capitalize text-center" key={elem}>{elem}</div>
                        )
                    }) : ""}
                 </div>
            </div>
        </>
    )
}
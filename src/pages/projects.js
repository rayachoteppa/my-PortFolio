import ProjectTemplate from "./project"

import {useRouter} from "next/router"

import Navigation from "./navigation"

import { Data,Hobby } from "./data";

export default function Projects(){


    
    // class Project{
    //     constructor(title,content,technologies){
    //         this.title = title ;
    //         this.content =  content ;
    //         this.technologies = technologies;
    //     }
    // }

    // let project1 = new Project();


    // console.log(project1);

    // let projects = [];

  
    // projects.push(project1)
  
    let projects = Object.keys(Data);

    let hobby = Object.keys(Hobby);


    console.log(projects);

    let router = useRouter();

    let  toPage = (props)=>{
      console.log(props);
          router.push({pathname:"projectDescription" , query:props});
    }

    return(
        <>
            <div className="h-screen background-color overflow-y-scroll">

            <div className="sm:w-1/2 w-full">
                <Navigation />

                </div>

            <div className="flex relative top-16 text-white sm:text-4xl justify-center items-center text-2xl">
                    <div className="capitalize relative fonts-header ">projects   . . . </div>
                    <div className="h-1 border-2 bar relative top-3"></div>
                </div>

                <div className="flex justify-center items-center  relative top-32">

                    <div className="grid sm:grid-cols-3 justify-center gap-10 ">

                            {projects.map(elem=>{
                            return(  <div key={elem} onClick={()=>toPage(elem)}>
                                <ProjectTemplate obj= {elem} key={elem} />
                            </div>)
                            })}

                        </div>
                    </div>


                    {/* hobbuyu */}

                    <div className="relative top-40 text-white text-center capitalize fonts-header text-2xl">
                        hobby projects
                           </div>

                    <div className="flex justify-center items-center  relative top-52">

                    <div className="grid sm:grid-cols-3 justify-center gap-10 ">

                            {hobby.map(elem=>{
                            return(  <div key={elem} onClick={()=>toPage(elem)}>
                                <ProjectTemplate obj= {elem} key={elem} />
                            </div>)
                            })}

                        </div>
                </div>
            </div>
        </>
    )
}
import main from "../assets/hero.png";
import { AiOutlineGithub ,AiOutlineLinkedin,AiOutlineMail } from "react-icons/ai";
import Skill from "./skll";

function content() {
    const detail={
        line0:'Hi',
        line:'im vignesh Arivalagan',
        line2:'im a full-stack developer- ',
        line3:"(MERN)",
        line4:"mailto:vignesh8772@gmail.com" ,
        
    }
    return(<>
    <section className="flex flex-col md:flex-row px-5 py-32 bg-maincolor justify-center" id="content"> 
        <div className="md:w-1/2 flex-col md:m-20">
        <h1 className=" text-amber-50 text-6xl font-dispaly ">{detail.line0} <br />{ detail.line}
        <p className="text-2xl text-gray-300">{detail.line2}<span className="text-red-500 font-bold text-2xl md:text-yellow-400">{detail.line3}</span> </p> </h1>
        <div className="flex py-3">
            <a href="https://www.linkedin.com/in/vignesh-a-a62b70264/" target="_blank" className="pr-5 hover:text-white "><AiOutlineLinkedin size={30} /></a>
            <a href="https://github.com/vignesh8772" target="_blank" className="pr-5 hover:text-white"><AiOutlineGithub size={30} /></a>
            <a href={detail.line4} target="_blank" className="pr-5 hover:text-white"><AiOutlineMail size={30}/></a>
        </div>
        <div className="mt-5 ">
            <Skill/>
        </div>
        </div>
        
        <img className="md:w-1/2"src={main}  />
    </section>
    </>)
}
export default content
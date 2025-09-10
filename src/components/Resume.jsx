import ResumeImg from "../assets/resume.jpg";
import file from"../assets/RESUME_.pdf"
import { ToastContainer, toast } from 'react-toastify';

function Resume() {
  function texts() {
    toast.success("You successfully downloaded.");
  }
  return (
    <section className=" flex flex-col md:flex-row bg-[#1f1e52] px-5 py-60" id="resume">
      <div className=" md:w-1/2 flex justify-center md:justify-end">
        <img className="w-[300px] " src={ResumeImg} />
      </div>
      <div className="md:w-1/2 flex justify-center ">
        <div className="flex flex-col justify-center   text-white">
          <h1 className="  text-4xl py-5 text-white border-b-4 border-[#5450e2] mb-3 pb-0.5 w-35 font-bold "  >
            Resume
          </h1>
          <p>You can view my Resume <a className='bg-maincolor px-5 py-2 font-bold hover:border-2 border-white rounded-2xl' href={file} target="_blank" download="VigneshAResume" onClick={texts}>Download</a></p>
        </div>
      </div>
    </section>
  );
}
export default Resume;

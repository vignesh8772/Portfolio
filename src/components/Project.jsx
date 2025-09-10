import ChatBOt from "../assets/chat_bot.png";
import Quiz from "../assets/Quiz.png";
import ecommerce from "../assets/654768465787.jpg";

export default function Project() {
  const detail = {
    project:[
      {
      projectimg: ecommerce,
      descriptio: " Built a MERN stack e-commerce platform supporting product display, detailed product views, add-to-cart functionality, and order placement.Implemented dynamic stock management that automatically decreases based on orders and integrated toastifynotifications for better user interaction. Implemented dynamic cart summary with per-product quantity, price calculation, and total order value display.",
      link: "https://github.com/vignesh8772/Mini-E-commerce",
      id:crypto.randomUUID(),
    },
    {
      projectimg: ChatBOt,
      descriptio: "A chatbot interface built with React and TailwindCSS.",
      link: "https://github.com/vignesh8772/React-Chatbot-UI",
      id:crypto.randomUUID(),
    },
    {
      projectimg: Quiz,
      descriptio:
        "A simple and interactive Quiz App built with React, HTML, CSS,and JavaScript. Users can attempt multiple-choice quizzes, getinstant feedback, and track their scores. Designed with aclean UI, responsive layout, and engaging user experience..",
      link: "https://github.com/vignesh8772/Quiz-App",
      id:crypto.randomUUID(),
    },
    ]};

  return (
    <>
      <section
        className="flex flex-col p-8 py-60  justify-center bg-maincolor text-white"
        id="project"
      >
        <div className="w-full ">
          <div className="flex flex-col  p-10">
            <h1 className="text-4xl py-5 text-white border-b-4 border-[#f016f4] mb-3 pb-1 w-32 font-bold ">
              Project
            </h1>
            <p>
              These are some of my projects. I have built these with React and
              vanilla CSS. Check them out.
            </p>
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-col md:flex-row px-10 gap-5  ">
            {detail.project.map((project)=>{ return(
              <div className="relative" key={project.id}>
              <img className="" src={project.projectimg} alt="chatbot_project" />
              <div className="absolute left-0 right-0 bottom-0 top-0 bg-[#1f1e52] opacity-0 duration-500 hover:opacity-100">
                <p className="text-center py-5 px-10">
                  {project.descriptio}
                </p>
                <div className="text-center py-5 px-10">
                  <a href={project.link} target="_blank" className="px-6 py-3 font-bold border-2 border-white rounded-2xl">view project</a>
                </div>
              </div>
            </div>
            )})}
            
          </div>
        </div>
      </section>
    </>
  );
}

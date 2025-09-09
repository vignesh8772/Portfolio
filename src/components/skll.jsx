import html from "../assets/skillIMG/html.png";
import css from "../assets/skillIMG/css.png";
import js from "../assets/skillIMG/js.png";
import react from "../assets/skillIMG/react.png";
import db from "../assets/skillIMG/db.png";
import tailwind from "../assets/skillIMG/tailwind.png";
import github from "../assets/skillIMG/github.png";
import git from "../assets/skillIMG/git.png";

export default function Skill() {
  return (
    // <div className="flex  flex-row  justify-evenly w-15 cursor-pointer  ">
    <>
      <div className="flex flex-wrap justify-start gap-4 p-4 cursor-pointer">
        <img
          src={html}
          alt="HTML"
          className="h-12 w-12 hover:scale-110 transition-transform"
        />
        <img
          src={css}
          alt="CSS"
          className="h-12 w-12 hover:scale-110 transition-transform"
        />
        <img
          src={js}
          alt="JavaScript"
          className="h-12 w-12 hover:scale-110 transition-transform"
        />
        <img
          src={react}
          alt="React"
          className="h-12 w-12 hover:scale-110 transition-transform"
        />
        <img
          src={tailwind}
          alt="Tailwind"
          className="h-12 w-12 hover:scale-110 transition-transform"
        />
        <img
          src={db}
          alt="Database"
          className="h-12 w-12 hover:scale-110 transition-transform"
        />
        <img
          src={github}
          alt="GitHub"
          className="h-12 w-12 hover:scale-110 transition-transform"
        />
        <img
          src={git}
          alt="Git"
          className="h-12 w-12 hover:scale-110 transition-transform"
        />
      </div>
    </>
  );
}

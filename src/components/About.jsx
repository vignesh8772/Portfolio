import AboutImg from "../assets/about.png";

function About() {
  const detail = {
    about: "About me",

    line1:
      "Hi, I'm Vignesh. I am a Full stack web developer. I build beautiful Websites with React.js and Tailwind CSS.",
    line2:
      "I am proficient in Frontend skills like React.js, Tailwind CSS, SaSS, and CSS3.",
    line3: "In backend I know Node.js, Express.js, MongoDB, and Mongoose.",
  };

  return (
    <section
      className="flex flex-col md:flex-row bg-[#1f1e52] px-5 py-32"
      id="about"
    >
      <div className="md:w-1/2 flex justify-center">
        <img src={AboutImg} alt="About me" className="rounded-2xl shadow-lg" />
      </div>
      <div className="md:w-1/2 flex justify-center ">
        <div className="flex  flex-col justify-center text-white">
          <h1 className="text-4xl py-5 border-b-4 border-[#5450e2] mb-3 pb-1 w-48 font-bold">
            {detail.about}
          </h1>
          <p className="pb-5">{detail.line1}</p>
          <p className="pb-5">{detail.line2}</p>
          <p className="pb-5">{detail.line3}</p>
        </div>
      </div>
    </section>
  );
}

export default About;

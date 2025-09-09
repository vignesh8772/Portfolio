
function Contact() {
  const detail={
    line1:"Contact",
    line2:"If you want to dicuss more in details, please contact ",
    line3:"Email : ",
    line4:"vignesh8772@gmail.com",
    line5:"Phone :",
    line6:"+91 7010963013",
    line7:"",
  }
  return (
    <section className=" flex flex-col  bg-maincolor px-5 py-32" id="contact">
      
      <div className=" flex flex-col items-center text-white">
          <h1 className="  text-4xl py-5 text-white border-b-4 border-[#c800ff] mb-3 pb-0.5 w-35 font-bold ">
            {detail.line1}
          </h1>
          <p>{detail.line2}</p>
          <p><span className="font-bold">{detail.line3}</span>{detail.line4}</p>
          <p><span className="font-bold"> {detail.line5}</span>{detail.line6}</p>
        </div>
    </section>
  );
}
export default Contact;

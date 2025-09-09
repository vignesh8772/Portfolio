import About from "./components/About"
import Header from "./components/Header"
import Project from "./components/Project"
import Content from "./components/content"
import Resume from "./components/Resume"
import Contact from "./components/Contact"
import Footer from "./components/Foother"
import { ToastContainer,toast } from "react-toastify"



function App() {

  return (
    <>
    <ToastContainer position="top-center" />
      <Header/>
      <Content/>
      <About/>
      <Project/>
      <Resume />
      <Contact/>
      <Footer/> 

    </>
  )
}

export default App

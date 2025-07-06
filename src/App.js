import "./App.scss";
import HomePage from "./js/scenes/home/HomePage";
import Navbar from "./js/components/navbar/Navbar";
import AboutMe from "./js/scenes/aboutme/AboutMe";
import Resume from "./js/scenes/resume/Resume";
import { useState } from "react";
import Services from "./js/scenes/services/Services";
import Contact from "./js/scenes/contact/Contact";
import Blog from "./js/scenes/blog/Blog";
import { Route, Routes } from "react-router-dom";
import BlogPost from "./js/scenes/blogposts/BlogPost";

const App = () => {
  const windowWidth = window.innerWidth;
  const [currentTab, setCurrentTab] = useState("");

  const [dropdownOpen, setDropdownOpen] = useState(windowWidth > 499 ? true : false);

  const url = window.location.href;
  const route = url.split("/")[3];

  return (
    <>
      <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} dropdownOpen = {dropdownOpen} setDropdownOpen = {setDropdownOpen}/>
      {route === "resume" && (
        <>
          <a className="download-btn" href={"/SUMANMONDAL_CV.docx"} download>
            <span>Download CV</span>
          </a>
        </>
      )}
      <main className={`app-content app-content-${route} ${dropdownOpen ? 'dropdownOpenCss': 'dropdownOpenCss2'}`}>
        <Routes>
          <Route path="/about" element={<AboutMe />}></Route>
          <Route path="/resume" element={<Resume />}></Route>
          <Route path="/expertise" element={<Services />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/blog/:slug" element={<BlogPost />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </main>
      <footer>© 2021. Created By Suman Mondal</footer>
    </>
  );
};

export default App;

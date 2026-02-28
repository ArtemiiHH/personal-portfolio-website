// Import components
import Header from "./components/header/Header";
import Hero from "./sections/hero/Hero";
import About from "./sections/about/About";
import Skills from "./sections/skills/Skills";
import Projects from "./sections/projects/Projects";
import Contact from "./sections/contact/Contact";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;

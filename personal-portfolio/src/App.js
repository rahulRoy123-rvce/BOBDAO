import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { BrowserRouter, BrowserRouter as Router , Route , Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
       <NavBar />
      <Banner /> 
      <Routes>
     {/* <Route path="/" element={<NavBar />}> */}
       {/* <Route index element={<Home />} /> */}
       {/* <Route path="discord" element={< />} /> */}
       <Route exact path="/profile" element={<Skills />} />
       {/* <Route path="*" element={<NoPage />} /> */}
   
   </Routes>
 
 
      {/* <Skills />
      <Projects />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;

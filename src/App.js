import NavBar from "./components/NavBar/index.js"
import Opening from "./components/Opening/index.js";
import Background from "./components/Background/index.js"
import Experience from "./components/Experiences/index.js";
import Ozlusoz from "./components/OzluSoz/index.js";
import Contact from "./components/Contact/index.js";
import Footer from "./components/Footer/index.js"

function App() {
  return (
    <div>
      <NavBar/>
      <Opening/>
      <Background/>
      <Experience/>
      <Ozlusoz/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import { Navbars } from "./component/navbar/Navbar";

import { Home } from "./component/Home";
import { Skills } from "./component/Skills";
import { About } from "./component/About";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbars />
      <Container>
        <Skills />
        <About />
      </Container>
    </div>
  );
}

export default App;

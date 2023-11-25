import { Header } from "../src/components/Header";
import { Introduce } from "../src/components/Introduce";
import { About } from "../src/components/About";
import { Skills } from "../src/components/Skills";
import { MyProjects } from "../src/components/MyProjects";

function App() {
  return (
    <div className="App">
      <Header />
      <Introduce />
      <About />
      <Skills />
      <MyProjects />
    </div>
  );
}

export default App;

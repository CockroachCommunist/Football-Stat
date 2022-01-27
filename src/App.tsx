import Content from "./Content/Content";
import "./App.css";
import { NavBar } from "./components";

function App() {
  return (
    <div className="App">
      <div className="content">
        <Content />
      </div>
      <NavBar />
    </div>
  );
}

export default App;

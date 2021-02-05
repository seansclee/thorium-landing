import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header";
import Splash from "./components/Splash";
import Content from "./components/Content";

function App() {
  return (
    <div className="App">
      <Header />
      <Splash />
      <Content />
    </div>
  );
}

export default App;

// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles/styles.css";
import Navbar from "./components/header/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <Home />
    </div>
  );
}

export default App;

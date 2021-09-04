// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles/styles.css";
import Navbar from "./components/header/Navbar";
import BannerSlider from "./components/header/BannerSlider";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <BannerSlider />
      </header>
      <Home />
    </div>
  );
}

export default App;

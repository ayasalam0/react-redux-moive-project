// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles/styles.css";
import Navbar from "./components/header/Navbar";
import BannerSlider from "./components/header/BannerSlider";
import Home from "./components/Home";
import useAxios from "./components/useAxios.js"
  
function App() {
    //use Data to display the api data
  //setSearch for the value of the search for the api
  const { Data, loading, setSearch, setLoading } = useAxios();
  console.log(Data); 
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

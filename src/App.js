import logo from "./logo.svg";
import "./App.css";
import useAxios from "./components/useAxios.js";
function App() {
  //use Data to display the api data
  //setSearch for the value of the search for the api
  const { Data, loading, setSearch, setLoading } = useAxios();
  console.log(Data);
  return <div className="App"></div>;
}

export default App;

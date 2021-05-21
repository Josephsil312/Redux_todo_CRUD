import "./App.css";
import Home from "./components/Home";

function App(props) {
  console.log(props);
  return (
    <div className="App m-5">
      <Home />
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import "./styles/style.css";
import Card from "./components/Card";

function App() {
  const [data, setData] = useState();
  const [counter, setCounter] = useState(0);
  const [hasLoaded, setHasLoaded] = useState(false);
  const nextPersonHandler = (e) => {
    setCounter(counter + 1);
  };

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      const result = await response.json();
      if (result) {
        setData(result);
        setHasLoaded(true);
      }
    };
    getData();
  }, []);
  return (
    <div className="App">
      <div onDragEnd={nextPersonHandler} className="card-container">
        {hasLoaded ? <Card data={data[counter]} /> : "loading"}
      </div>
    </div>
  );
}

export default App;

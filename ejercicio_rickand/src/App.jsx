import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./index.css";
import ResidentInfo from "./components/ResidentsInfo";

function App() {

  const [rickLocation, setrickLocation] = useState({});
  const [typeId, setTypeId] = useState("");

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 126) + 1
    axios.get(`https://rickandmortyapi.com/api/location/${randomId}/`)
      .then(res => setrickLocation(res.data));
  }, []);

  const searchLocation = () => {
    setrickLocation([])
    axios.get(`https://rickandmortyapi.com/api/location/${typeId}/`)
      .then(res => setrickLocation(res.data));
  }

  console.log(rickLocation);

  return (      
      <div className="App">
        <div className="banner">
        </div>        
        <h1>Rick and Morty Wiki</h1>
        <h3>Morty’s Story</h3>
        <input
          type="text"
          value={typeId}
          onChange={e => setTypeId(e.target.value)}
        />
        <button onClick={searchLocation}>Search Location</button>
        <h2>Name: {rickLocation.name}</h2>
        <h2>Type: {rickLocation.type}</h2>
        <h2>Residents: {rickLocation.residents?.length}</h2>
        
        <div className="grid">
        {rickLocation.residents?.map(resident => (
            <ResidentInfo characterUrl={resident} />       
        ))}
        </div>      
      </div>
  )
}

export default App;
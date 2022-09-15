import { useState } from "react";
import ReactMapGL from "react-map-gl";
function App() {
  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    width: "100vw",
    height: "100vh",
    zoom: 8,
  });

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
        mapboxAccessToken="pk.eyJ1IjoibG91c2NoYSIsImEiOiJja3pibmZsZTYwbm1nMm9zNmdpdmJwYW5lIn0.qy5kQf2SjEf4CkSg4JcY1Q"
      />
      ;
    </div>
  );
}

export default App;

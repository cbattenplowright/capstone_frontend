import Map from "../components/RouteContainerComponents/Map";
import { useState, useEffect } from "react";
import RouteList from "../components/RouteContainerComponents/RouteList";
import './RouteContainer.css'; // Import your CSS file

const RouteContainer = () => {
  const [routeList, setRouteList] = useState([]);
  const [selectedRouteList, setSelectedRouteList] = useState([]);

  const fetchRoutes = async () => {
    const response = await fetch("http://localhost:8080/routes");
    const data = await response.json();
    setRouteList(data);
  };

  useEffect(() => {
    fetchRoutes();
  }, []);

  return (
    <div className="route-container">
      <div className="route-list">
        <RouteList routes={routeList} /> {/* Pass routeList as the routes prop */}
      </div>
      <div className="map">
        <Map />
      </div>
    </div>
  );
};

export default RouteContainer;
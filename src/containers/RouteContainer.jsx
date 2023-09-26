import Map from "../components/RouteContainerComponents/Map";
import { useState, useEffect } from "react";
import RouteList from "../components/RouteContainerComponents/RouteList";
import SelectedRouteList from "../components/RouteContainerComponents/SelectedRouteList";
import "./RouteContainer.css";

const RouteContainer = () => {
  const [routeList, setRouteList] = useState([]);
  const [selectedRouteList, setSelectedRouteList] = useState([]);

  const fetchRoutes = async () => {
    const response = await fetch("http://localhost:8080/routes");
    const data = await response.json();
    setRouteList(data);
  };
  const addToSelectedRouteList = (routeToAdd) => {
    const updatedSelectedRoutes = [...selectedRouteList, routeToAdd];
    setSelectedRouteList(updatedSelectedRoutes);
  };
  const removeFromSelectedRouteList = (routeToRemove) => {
    setSelectedRouteList(
      selectedRouteList.filter((route) => route.id !== routeToRemove.id)
    );
  };

  // useEffect(() => {
  //   fetchRoutes();
  // }, []);
  useEffect(() => {
    console.log(selectedRouteList);
  }, [selectedRouteList]);

  return (
    <div className="route-container">
     <div className="route-map">
      <div className="route-list">
        <RouteList
          routes={routeList}
          addToSelectedRouteList={addToSelectedRouteList}
          removeFromSelectedRouteList={removeFromSelectedRouteList}
        />
      </div>
      <div className="map">
        <Map fetchRoutes={fetchRoutes}/>
      </div>
      </div>
      <div className="selected-route-list">
        <SelectedRouteList selectedRoutes={selectedRouteList} />
      </div>
    </div>
  );
};

export default RouteContainer;

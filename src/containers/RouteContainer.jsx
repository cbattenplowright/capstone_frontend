import Map from "../components/RouteContainerComponents/Map";
import { useState, useEffect } from "react";
import RouteList from "../components/RouteContainerComponents/RouteList";

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

  useEffect(() => {
    fetchRoutes();
  }, []);
  useEffect(() => {
    console.log(selectedRouteList);
  }, [selectedRouteList]);

  return (
    <>
      <RouteList
        routes={routeList}
        addToSelectedRouteList={addToSelectedRouteList}
        removeFromSelectedRouteList={removeFromSelectedRouteList}
      />
      <Map />
    </>
  );
};

export default RouteContainer;

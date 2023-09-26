import Map from "../components/RouteContainerComponents/Map";
import { useState, useEffect } from "react";
import RouteList from "../components/RouteContainerComponents/RouteList";

const RouteContainer = () => {

  const [ routeList, setRouteList] = useState ([]);
  const [ selectedRouteList, setSelectedRouteList] = useState([]);
  
const fetchRoutes = async () => {
  const response = await fetch("http://localhost:8080/routes")
  const data = await response.json();
  setRouteList(data);
}

useEffect(() => {
  fetchRoutes();
}, [])

  return (
    <>
      <RouteList routes= {routeList}/>
      <Map />
    </>
  );
};

export default RouteContainer;

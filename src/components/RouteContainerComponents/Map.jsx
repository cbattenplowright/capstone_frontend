import { useEffect, useState } from "react";

const Map = () => {
  const [routeWaypointsList, setRouteWaypointsList] = useState([]);
  const [routeUrlList, setRouteUrlList] = useState([]);

  const fetchRouteWaypointsList = async () => {
    const response = await fetch("http://localhost:8080/routes/all/waypoints");
    const data = await response.json();
    setRouteWaypointsList(data);
  };

  const createDirectionsURL = () => {
    // https://api.mapbox.com/directions/v5/driving/{coordinates}
    // state of routeURLs

    //FOR LOOP THROUGH routeWaypointsList
    // format routeWaypointsList into lat,long;lat,long
    //IF INDEX IS EVEN APPEND ELEMENT AND ADD COMMA
    //IF INDEX IS ODD APPEND ELEMENT AND ADD SEMI COLON
    //Make API fetch request
    //Add route response to routesList

    // -0.5,6.5;-0.5,6.5;-0.5,6.5;-0.5,6.5;-0.5,6.5;
    console.log("This is called");
    for (let routeWaypoint in routeWaypointsList) {
      console.log(routeWaypointsList[routeWaypoint]);
      const startLocationLat = routeWaypointsList[routeWaypoint].startLat;
      const startLocationLong = routeWaypointsList[routeWaypoint].startLong;
      let url = `https://api.mapbox.com/directions/v5/driving/${startLocationLat},${startLocationLong};`;
      for (let i = 0; i < routeWaypointsList[routeWaypoint].orderWaypoints.length; i++) {
        if (i % 2 === 0) {
          url += `${routeWaypointsList[routeWaypoint].orderWaypoints[i]},`;
        }
        if (i % 2 === 1 && i !== routeWaypointsList[routeWaypoint].orderWaypoints.length - 1) {
          url += `${routeWaypointsList[routeWaypoint].orderWaypoints[i]};`;
        } else {
          url += `${routeWaypointsList[routeWaypoint].orderWaypoints[i]}`;
        }
      }
      setRouteUrlList([...routeUrlList, url]);
    }
  };

  useEffect(() => {
    fetchRouteWaypointsList();
  }, []);

  // wait to output routeWaypointsList
  useEffect(() => {
    console.log(routeWaypointsList);
    createDirectionsURL();
  }, [routeWaypointsList]);

  useEffect(() => {
    console.log(routeUrlList);
  }, [routeUrlList]);

  return <></>;
};

export default Map;

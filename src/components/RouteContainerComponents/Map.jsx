import { useEffect, useState, useRef } from "react";
import mapboxgl from "mapbox-gl";

const Map = () => {
  const [routeWaypointsList, setRouteWaypointsList] = useState([]);
  const [routeUrlList, setRouteUrlList] = useState([]);
  const [routeDirections, setRouteDirections] = useState([]);
  mapboxgl.accessToken = import.meta.env.VITE_APIKEY;
  const mapContainer = useRef(null);
  const map = useRef(null);

  const fetchRouteWaypointsList = async () => {
    const response = await fetch("http://localhost:8080/routes/all/waypoints");
    const data = await response.json();
    setRouteWaypointsList(data);
  };

  const fetchRouteDirections = async () => {
    const response = await fetch(routeUrlList[0], { method: "GET" });
    const json = await response.json();
    console.log(json);
    const data = await json.routes[0];

    setRouteDirections(data);
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
    let urlList = [];

    for (let routeWaypoint in routeWaypointsList) {
      console.log(routeWaypointsList[routeWaypoint]);
      const startLocationLat = routeWaypointsList[routeWaypoint].startLat;
      const startLocationLong = routeWaypointsList[routeWaypoint].startLong;
      let url = `https://api.mapbox.com/directions/v5/mapbox/driving/${startLocationLat},${startLocationLong};`;
      for (
        let i = 0;
        i < routeWaypointsList[routeWaypoint].orderWaypoints.length;
        i++
      ) {
        if (i % 2 === 0) {
          url += `${routeWaypointsList[routeWaypoint].orderWaypoints[i]},`;
        }
        if (
          i % 2 === 1 &&
          i !== routeWaypointsList[routeWaypoint].orderWaypoints.length - 1
        ) {
          url += `${routeWaypointsList[routeWaypoint].orderWaypoints[i]};`;
        } else {
          url += `${routeWaypointsList[routeWaypoint].orderWaypoints[i]},`;
        }
      }
      url += `?access_token=${mapboxgl.accessToken}`;
      urlList.push(url);
    }
    console.log("a");
    setRouteUrlList(urlList);
  };

  useEffect(() => {
    console.log(mapboxgl.accessToken);
    fetchRouteWaypointsList();
  }, []);

  useEffect(() => {
    console.log(routeDirections);
  }, [routeDirections]);

  // wait to output routeWaypointsList
  useEffect(() => {
    console.log(routeWaypointsList);
    createDirectionsURL();
  }, [routeWaypointsList]);

  useEffect(() => {
    console.log(routeUrlList);
    fetchRouteDirections();
  }, [routeUrlList]);

  return <></>;
};

export default Map;

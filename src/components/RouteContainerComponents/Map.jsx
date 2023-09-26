import { useEffect, useState, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "./Map.css";

const Map = ({fetchRoutes}) => {
  const [routeWaypointsList, setRouteWaypointsList] = useState([]);
  const [routeUrlList, setRouteUrlList] = useState([]);
  const [routeDirections, setRouteDirections] = useState([]);

  // Mapbox properties
  mapboxgl.accessToken = import.meta.env.VITE_APIKEY;
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-0.124638);
  const [lat, setLat] = useState(51.500832);
  const [zoom, setZoom] = useState(11);

  const fetchRouteWaypointsList = async () => {
    const response = await fetch("http://localhost:8080/routes/all/waypoints");
    const data = await response.json();
    setRouteWaypointsList(data);
  };

  const updateRouteDistance = async (routeId, distance) => {
    const response = await fetch(`http://localhost:8080/routes/${routeId}?distance=${distance}`,
    {
      method: "PATCH"
    });
    const json = await response.json();
    console.log(json);
  }

  const fetchRouteDirections = async () => {
    const response = await fetch(routeUrlList[0], {
      method: "GET"
    });
    const json = await response.json();
    console.log("This is the json returned from the directions api request");
    console.log(json);
    const data = await json.routes[0];
    const routeDistance = json.routes[0].distance;
    const {routeId} = routeWaypointsList[0];

    updateRouteDistance(routeId, routeDistance);

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
      for (let i = 0; i < routeWaypointsList[routeWaypoint].orderWaypoints.length; i++) {
        if (i % 2 === 0) {
          url += `${routeWaypointsList[routeWaypoint].orderWaypoints[i]},`;
        } else if (
          i % 2 === 1 &&
          i !== routeWaypointsList[routeWaypoint].orderWaypoints.length - 1
        ) {
          url += `${routeWaypointsList[routeWaypoint].orderWaypoints[i]};`;
        } else {
          url += `${routeWaypointsList[routeWaypoint].orderWaypoints[i]}`;
        }
      }
      url += `?overview=full&geometries=geojson`;
      url += `&access_token=${mapboxgl.accessToken}`;
      urlList.push(url);
    }
    setRouteUrlList(urlList);
  };

  const createRouteLayerOnMap = () => {
    if (routeDirections && routeDirections.geometry && routeDirections.geometry.coordinates) {
      const route = routeDirections.geometry.coordinates;
      const geojson = {
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates: route
        }
      };

      // creation of route layer, can amend id for route name and change colours depending
      if (map.current.getSource("route")) {
        map.current.getSource("route").setData(geojson);
      } else {
        map.current.addLayer({
          id: "route",
          type: "line",
          source: {
            type: "geojson",
            data: geojson
          },
          layout: {
            "line-join": "round",
            "line-cap": "round"
          },
          paint: {
            "line-color": "#3887be",
            "line-width": 5,
            "line-opacity": 0.75
          }
        });
      }
    }
  };

  // when page loads
  useEffect(() => {
    fetchRouteWaypointsList();
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom
    });
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  }, []);

  // wait to output routeWaypointsList
  useEffect(() => {
    console.log(routeWaypointsList);
    createDirectionsURL();
  }, [routeWaypointsList]);

  useEffect(() => {
    console.log(routeUrlList);
    fetchRouteDirections();
  }, [routeUrlList]);

  useEffect(() => {
    console.log("This is the route directions list/object");
    console.log(routeDirections);
    fetchRoutes();
    map.current.on("load", () => {
      createRouteLayerOnMap();
    });
  }, [routeDirections]);

  return (
    <>
      <div ref={mapContainer} className="map-container" />
    </>
  );
};

export default Map;

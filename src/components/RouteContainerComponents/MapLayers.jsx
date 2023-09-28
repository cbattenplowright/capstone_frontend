import mapboxgl from "mapbox-gl";

const displayDepotPoint = (map, location) => {
  console.log("Creating depo waypoint");

  const start = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {},
        geometry: {
          type: "Point",
          coordinates: location
        }
      }
    ]
  };
  if (map.current.getLayer("start")) {
    map.current.getSource("start").setData(start);
  } else {
    map.current.addLayer({
      id: "start",
      type: "circle",
      source: {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              properties: {},
              geometry: {
                type: "Point",
                coordinates: location
              }
            }
          ]
        }
      },
      paint: {
        "circle-radius": 10,
        "circle-color": "#ffd500"
      }
    });
    map.current.addLayer({
      id: "start-label",
      type: "symbol",
      source: "start", // Reference the circle layer as the source
      layout: {
        "text-field": "D", // Display the depot property as text
        "text-size": 12,
        "text-anchor": "top",
        "text-offset": [0, -0.55]
      },
      paint: {
        "text-color": "#000" // Text color
      }
    });
  }
};

const displayWaypoint = (map, orderWaypoints, routeId) => {
  let stopCount = 1;
  for (let i = 0; i < orderWaypoints.length; i += 2) {
    let currentWaypointCoords = [orderWaypoints[i], orderWaypoints[i + 1]];
    console.log(currentWaypointCoords);
    const waypoint = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            // Add a number to the properties for the marker
            number: `${stopCount}` // Convert the number to a string
          },
          geometry: {
            type: "Point",
            coordinates: currentWaypointCoords
          }
        }
      ]
    };
    if (map.current.getLayer(`route-${routeId}-stop-${stopCount}`)) {
      map.current.getSource(`route-${routeId}-stop-${stopCount}`).setData(waypoint);
    } else {
      map.current.addLayer({
        id: `route-${routeId}-stop-${stopCount}`,
        type: "circle",
        source: {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: [
              {
                type: "Feature",
                properties: {},
                geometry: {
                  type: "Point",
                  coordinates: currentWaypointCoords
                }
              }
            ]
          }
        },
        paint: {
          "circle-radius": 10,
          "circle-color": "#ff7300"
        }
      });
      map.current.addLayer({
        id: `route-${routeId}-stop-${stopCount}-label`,
        type: "symbol",
        source: `route-${routeId}-stop-${stopCount}`, // Reference the circle layer as the source
        layout: {
          "text-field": `${stopCount}`, // Display the 'number' property as text
          "text-size": 12,
          "text-anchor": "top",
          "text-offset": [0, -0.55]
        },
        paint: {
          "text-color": "#000" // Text color
        }
      });
    }
    stopCount++;
  }
};

export { displayDepotPoint, displayWaypoint };

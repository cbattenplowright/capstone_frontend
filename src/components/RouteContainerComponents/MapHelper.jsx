import mapboxgl from "mapbox-gl";

const displayDepotPoint = (map, location) => {
  console.log("Creating display point");

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
  }
};

const displayWaypoint = (map, orderWaypoints) => {
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
            number: "1" // Convert the number to a string
          },
          geometry: {
            type: "Point",
            coordinates: [-0.14078, 51.501277]
          }
        }
      ]
    };
    if (map.current.getLayer(`Stop${stopCount}`)) {
      map.current.getSource(`Stop${stopCount}`).setData(waypoint);
    } else {
      map.current.addLayer({
        id: `Stop${stopCount}`,
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
                  coordinates: [-0.14078, 51.501277]
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
        id: `Stop${stopCount}-label`,
        type: "symbol",
        source: `Stop${stopCount}`, // Reference the circle layer as the source
        layout: {
          "text-field": "1", // Display the 'number' property as text
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

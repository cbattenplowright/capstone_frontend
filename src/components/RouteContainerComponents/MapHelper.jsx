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
          coordinates: location,
        },
      },
    ],
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
                coordinates: location,
              },
            },
          ],
        },
      },
      paint: {
        "circle-radius": 10,
        "circle-color": "#ffd500",
      },
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
            number: stopCount.toString(), // Convert the number to a string
          },
          geometry: {
            type: "Point",
            coordinates: currentWaypointCoords,
          },
        },
      ],
    };
    if (map.current.getLayer(`Stop${stopCount}`)) {
      map.current.getSource(`Stop${stopCount}`).setData(waypoint);
    } else {
      map.current.addLayer({
        id: `Stop${stopCount}`,
        type: "symbol", // Use a symbol layer for text labels
        source: {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: [
              {
                type: "Feature",
                properties: {
                  // Add a number to the properties for the marker
                  number: stopCount.toString(), // Convert the number to a string
                },
                geometry: {
                  type: "Point",
                  coordinates: currentWaypointCoords,
                },
              },
            ],
          },
        },
        layout: {
          // Use the number property as the text field
          "text-field": ["get", "number"],
          "text-size": 10, // Adjust the text size as needed
          "text-offset": [0, 1], // Offset the text slightly
          "text-anchor": "top", // Position the text above the marker
          "icon-image": "circle"
        },
        paint: {
          "text-color": "#000000", // Text color
          "text-halo-color": "#ffffff", // Text halo color
          "text-halo-width": 1, // Text halo width
        },
      });
    }
    stopCount++;
  }
};

export { displayDepotPoint, displayWaypoint };
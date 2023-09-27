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
            "circle-color": "#ff7300"
        }
        });
    }
}

const displayWaypoint = (map, orderWaypoints) => {
    let stopCount=1;
    for (let i = 0; i < orderWaypoints.length; i+=2) {
        let currentWaypointCoords = [orderWaypoints[i], orderWaypoints[i+1]];
        console.log(currentWaypointCoords);
        const waypoint = {
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
                      coordinates: currentWaypointCoords
                    }
                  }
                ]
              }
            },
            paint: {
              "circle-radius": 10,
              "circle-color": "#98fb98"
            }
          });
        }
        stopCount++;
      }
}

export {displayDepotPoint, displayWaypoint}

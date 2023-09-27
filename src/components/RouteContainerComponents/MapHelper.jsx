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

const displayWaypoint = (map, lat, lng) => {
    console.log(lat, lng);
    const marker = new mapboxgl.Marker().setLngLat([lat, lng]).addTo(map);
    console.log("waypoint added");
}

export {displayDepotPoint, displayWaypoint}

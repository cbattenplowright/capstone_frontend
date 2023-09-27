
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

export default displayDepotPoint;
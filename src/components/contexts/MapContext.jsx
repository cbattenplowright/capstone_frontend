import { Component, createContext, useState, useRef } from "react";
import mapboxgl from "mapbox-gl";

export const MapContext = createContext(null);

const MapContextProvider = (props) => {
    const map = useRef(null);
    mapboxgl.accessToken = import.meta.env.VITE_APIKEY;
    const viteKey = mapboxgl.accessToken;
    const mapContainer = useRef(null);
    const [lng, setLng] = useState(-0.124638);
    const [lat, setLat] = useState(51.500832);
    const [zoom, setZoom] = useState(11);
    const contextValue = {map, mapContainer, viteKey, lng, setLng, lat, setLat, zoom, setZoom};

    return(
        <MapContext.Provider value={contextValue}>
            {props.children}
        </MapContext.Provider>
    )
}

export default MapContextProvider;
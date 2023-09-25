import { useEffect, useState } from "react";

const Map = () => {
    const [ routeWaypointsList, setRouteWaypointsList] = useState ([]);

    const fetchRouteWaypointsList = async () => {
        const response = await fetch ("http://localhost:8080/routes/all/waypoints")
        const data = await response.json()
        setRouteWaypointsList(data);
    }

    // wait to output routeWaypointsList
    useEffect(() => {
        console.log(routeWaypointsList)
    }, [routeWaypointsList])

}


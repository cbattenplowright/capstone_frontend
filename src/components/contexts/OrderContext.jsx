import { Component, createContext, useState, useRef } from "react";
import mapboxgl from "mapbox-gl";

export const OrderContext = createContext(null);

const OrderContextProvider = (props) => {
    const [selectedOrderList, setSelectedOrderList] = useState([]);
    const contextValue = {selectedOrderList, setSelectedOrderList};

    return(
        <OrderContext.Provider value={contextValue}>
            {props.children}
        </OrderContext.Provider>
    )
}

export default OrderContextProvider;
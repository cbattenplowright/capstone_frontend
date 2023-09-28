import { Component, createContext, useState, useRef } from "react";

export const OrderContext = createContext(null);

const OrderContextProvider = (props) => {
  const [selectedOrderList, setSelectedOrderList] = useState([]);
  const [selectedWaypointsList, setSelectedWaypointsList] = useState([]);

  const createSelectedWaypointsList = () => {
    const waypointsList = [];

    for (let i = 0; i < selectedOrderList.length; i++) {
      waypointsList.push(selectedOrderList[i].lat);
      waypointsList.push(selectedOrderList[i].lng);
    }

    console.log(waypointsList);

    setSelectedWaypointsList(waypointsList);
  };

  const contextValue = { selectedOrderList, setSelectedOrderList, createSelectedWaypointsList };

  return <OrderContext.Provider value={contextValue}>{props.children}</OrderContext.Provider>;
};

export default OrderContextProvider;

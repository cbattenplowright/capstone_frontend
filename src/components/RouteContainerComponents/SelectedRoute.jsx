import React, { useState } from "react";
import OrderModal from "./OrderModal";

const SelectedRoute = ({ selectedRoute }) => {
  const orders = selectedRoute.orders;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Opens order details modal on centre of page
  const openModal = (order) => {
    console.log(orders);
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  // Closes order details modal on centre of page
  const closeModal = () => {
    setSelectedOrder(null);
    setIsModalOpen(false);
  };

  let stopCount = 0;
  // Creates buttons for each stop of the delivery
  const mappedOrders = orders.map((order) => {
    stopCount++;
    return (
      <button key={order.id} className="stop-button" onClick={() => openModal(order)}>
        <li>Stop: {stopCount}</li>
      </button>
    );
  });

  return (
    <div id="selected-route">
      <h4 className="route-name">Route {selectedRoute.id}</h4>
      <ul>{mappedOrders}</ul>

      {/* Render the modal when isModalOpen is true */}
      {isModalOpen && <OrderModal order={selectedOrder} closeModal={closeModal} />}
    </div>
  );
};

export default SelectedRoute;

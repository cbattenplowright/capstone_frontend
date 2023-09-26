import React, { useState } from "react";
import OrderModal from "./OrderModal";

const SelectedRoute = ({ selectedRoute }) => {
  const orders = selectedRoute.orders;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const openModal = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedOrder(null);
    setIsModalOpen(false);
  };

  const mappedOrders = orders.map((order) => {
    return (
      <button
        key={order.id}
        className="stop-button"
        onClick={() => openModal(order)} 
      >
        <li>Stop: {order.id}</li>
      </button>
    );
  });

  return (
    <div id="selected-route">
      <h4>{selectedRoute.routeName}</h4>
      <ul>{mappedOrders}</ul>

      {/* Render the modal when isModalOpen is true */}
      {isModalOpen && (
        <OrderModal order={selectedOrder} closeModal={closeModal} />
      )}
    </div>
  );
};

export default SelectedRoute;
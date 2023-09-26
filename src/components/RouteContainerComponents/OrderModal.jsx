// OrderModal.jsx
import React from "react";
import "./OrderModal.css";


const OrderModal = ({ order, closeModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Order Details</h2>
        <p>Order ID: {order.id}</p>
        <p>Description: {order.description}</p>
        <p>Date: {order.date}</p>
        <p>Latitude: {order.lat}</p>
        <p>Longitude: {order.lng}</p>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default OrderModal;
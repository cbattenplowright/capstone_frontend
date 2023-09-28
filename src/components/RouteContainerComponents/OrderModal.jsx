// OrderModal.jsx
import React from "react";
import "./OrderModal.css";

const OrderModal = ({ order, closeModal }) => {

  const updateDeliveryStatus = async () => {
    const response = await fetch(`http://localhost:8080/orders/${order.id}?status=true`, 
    {
      method: "PATCH"
    })
    const json = await response.json();
    console.log(json);
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Order Details</h2>
        <p>Order ID: {order.id}</p>
        <p>Description: {order.description}</p>
        <p>Date: {order.date}</p>
        <p>Address: {order.address}</p>
        <p>Co-ordinates: {order.lat}, {order.lng}</p>
        <button onClick={closeModal}>Close</button>
        <button onClick={updateDeliveryStatus}>Delivered!</button>
      </div>
    </div>
  );
};

export default OrderModal;
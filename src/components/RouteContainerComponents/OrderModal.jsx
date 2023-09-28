import React, { useState } from "react";
import "./OrderModal.css";

const OrderModal = ({ order, closeModal }) => {
  const [statusUpdated, setStatusUpdated] = useState(false);

  // When Delivered button is clicked sends PATCH request to update the order on the backend to set delivered status to true
  const updateDeliveryStatus = async () => {
    const response = await fetch(`http://localhost:8080/orders/${order.id}?status=true`, {
      method: "PATCH"
    });
    const json = await response.json();
    console.log(json);
    setStatusUpdated(true); // Update the status when the button is clicked
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Order Details</h2>
        <p>Order ID: {order.id}</p>
        <p>Description: {order.description}</p>
        <p>Date: {order.date}</p>
        <p>Address: {order.address}</p>
        <p>
          Co-ordinates: {order.lat}, {order.lng}
        </p>
        <button onClick={closeModal}>Close</button>
        {statusUpdated ? (
          <button style={{ color: "green" }}>✔ Delivered!</button>
        ) : (
          <button onClick={updateDeliveryStatus}>Delivered!</button>
        )}
      </div>
    </div>
  );
};

export default OrderModal;

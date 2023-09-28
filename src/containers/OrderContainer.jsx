import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import OrderList from "../components/OrderContainerComponents/OrderList";
import { OrderContext } from "../components/contexts/OrderContext";
import "./OrderContainer.css";

const OrderContainer = () => {
  const [orderList, setOrderList] = useState([]);
  const { selectedOrderList, setSelectedOrderList } = useContext(OrderContext);

  // GET request to get all orders from the backend server
  const fetchOrders = async () => {
    const response = await fetch("http://localhost:8080/orders");
    const data = await response.json();
    setOrderList(data);
  };

  const addToSelectedOrderList = (orderToAdd) => {
    const updatedSelectedOrders = [...selectedOrderList, orderToAdd];
    setSelectedOrderList(updatedSelectedOrders);
  };

  const removeFromSelectedOrderList = (orderToRemove) => {
    setSelectedOrderList(selectedOrderList.filter((order) => order.id !== orderToRemove.id));
  };

  // Calls on load
  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="order-container">
      <div className="order-header">
        <Link to="/routes">
          <button class="route-button">
            <p>ROUTES</p>
          </button>
        </Link>
      </div>
      <OrderList
        orders={orderList}
        addToSelectedOrderList={addToSelectedOrderList}
        removeFromSelectedOrderList={removeFromSelectedOrderList}
      />
    </div>
  );
};

export default OrderContainer;

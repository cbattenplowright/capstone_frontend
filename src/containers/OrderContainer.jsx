import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import OrderList from "../components/OrderContainerComponents/OrderList";
import { OrderContext } from "../components/contexts/OrderContext";

const OrderContainer = () => {
  const [orderList, setOrderList] = useState([]);
  // const [selectedOrderList, setSelectedOrderList] = useState([]);
  const { selectedOrderList, setSelectedOrderList } = useContext(OrderContext);

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

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="order-container">
      <div className="order-header">
        <Link to="/">
          <p>ROUTES</p>
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

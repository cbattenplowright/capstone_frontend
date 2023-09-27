import { useEffect, useState } from "react";
import OrderList from "../components/OrderContainerComponents/OrderList";
import Order from "../components/OrderContainerComponents/Order";

const OrderContainer = () => {
  const [orderList, setOrderList] = useState([]);
  const [selectedOrderList, setSelectedOrderList] = useState([]);

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
    setSelectedOrderList(
      selectedOrderList.filter((order) => order.id !== orderToRemove.id)
    );
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div>
      <OrderList
        orders={orderList}
        addToSelectedOrderList={addToSelectedOrderList}
        removeFromSelectedOrderList={removeFromSelectedOrderList}
      />
    </div>
  );
};

export default OrderContainer;

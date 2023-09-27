import Order from "./Order";

const OrderList = ({
  orders,
  addToSelectedOrderList,
  removeFromSelectedOrderList,
}) => {
  const orderComponents = orders.map((order) => {
    return (
      <Order
        key={order.id}
        order={order}
        addToSelectedOrderList={addToSelectedOrderList}
        removeFromSelectedOrderList={removeFromSelectedOrderList}
      />
    );
  });

  return (
    <div id="order-list">
      <table>
        <caption>ORDERS</caption>
        <thead>
          <tr>
            <th></th>
            <th>Order ID</th>
            <th>Delivery Address</th>
            <th>Order Date</th>
            <th>Delivery Status</th>
          </tr>
        </thead>
        <tbody>{orderComponents}</tbody>
      </table>
    </div>
  );
};

export default OrderList;

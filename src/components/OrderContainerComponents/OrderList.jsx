import Order from "./Order";

const OrderList = ({
  orders,
  addToSelectedOrderList,
  removeFromSelectedOrderList,
}) => {
  const orderComponents = orders.map((order) => {
    return (
      <tr> 
      <Order
        key={order.id}
        order={order}
        addToSelectedOrderList={addToSelectedOrderList}
        removeFromSelectedOrderList={removeFromSelectedOrderList}
      />
      </tr>  
    );
  });

  return (
    <div id="order-list">
      <table>
        <caption>ORDERS</caption>
        <thead>
          <tr>
            <th></th>
            <th>Order Name</th>
            <th>Order Id</th>
            <th>Delivery Address</th>
            <th>Current Route</th>
          </tr>
        </thead>
        <tbody>{orderComponents}</tbody>
      </table>
    </div>
  );
};

export default OrderList;

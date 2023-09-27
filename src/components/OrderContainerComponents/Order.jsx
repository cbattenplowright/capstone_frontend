import OrderCheckbox from "./OrderCheckbox";

const Order = ({
  order,
  addToSelectedOrderList,
  removeFromSelectedOrderList,
}) => {
  return (
    <tr>
      <td>
        <OrderCheckbox
          order={order}
          addToSelectedOrderList={addToSelectedOrderList}
          removeFromSelectedOrderList={removeFromSelectedOrderList}
        />
      </td>
      <td>{order.id}</td>
      <td>
        {order.lat} {order.lng}
      </td>
      <td>{order.date}</td>
      <td>{JSON.stringify(order.delivered)}</td>
    </tr>
  );
};

export default Order;

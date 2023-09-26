const SelectedRoute = ({ selectedRoute }) => {
  const orders = selectedRoute.orders;
  const mappedOrders = orders.map((order) => {
    return (
      <button className="stop-button">
        <li>stop: {order.id}</li>
      </button>
    );
  });
  return (
    <div id="selected-route">
      <h4>{selectedRoute.routeName}</h4>
      <ul>{mappedOrders}</ul>
    </div>
  );
};

export default SelectedRoute;

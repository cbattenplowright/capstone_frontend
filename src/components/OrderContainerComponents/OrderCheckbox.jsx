import { useState, useContext } from "react";
import { OrderContext } from "../contexts/OrderContext";

const OrderCheckbox = ({ order, addToSelectedOrderList, removeFromSelectedOrderList }) => {
  const { selectedOrderList } = useContext(OrderContext);

  const [isChecked, setIsChecked] = useState(selectedOrderList.includes(order));

  const handleOnChange = () => {
    if (!isChecked) {
      addToSelectedOrderList(order);
    } else {
      removeFromSelectedOrderList(order);
    }
    setIsChecked(!isChecked);
  };

  return (
    <div id="checkbox">
      <input
        type="checkbox"
        id="selectedOrder"
        name="selectedOrder"
        checked={isChecked}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default OrderCheckbox;

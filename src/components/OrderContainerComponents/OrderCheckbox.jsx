import { useState } from "react";

const OrderCheckbox = ({ order, addToSelectedOrderList, removeFromSelectedOrderList }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    // Conditional that if order is checked adds/removes order from selectedOrderList
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

import React from 'react';
import './Order.css'; // You can create the Order.css file for styling

const Order = () => {
  const [selectedItems, setSelectedItems] = React.useState([]);

  // Function to handle adding an item to the order
  const addItemToOrder = (itemName) => {
    setSelectedItems([...selectedItems, itemName]);
  };

  // Function to handle removing an item from the order
  const removeItemFromOrder = (itemName) => {
    const updatedItems = selectedItems.filter(item => item !== itemName);
    setSelectedItems(updatedItems);
  };

  return (
    <div className="order-container">
      <h1 className="order-heading">Menu</h1>
      <div className="menu-items">
        <div className="menu-item">
          <h3>Burger</h3>
          <p>$10</p>
          <button onClick={() => addItemToOrder('Burger')}>Add to Order</button>
        </div>
        <div className="menu-item">
          <h3>Pizza</h3>
          <p>$12</p>
          <button onClick={() => addItemToOrder('Pizza')}>Add to Order</button>
        </div>
        <div className="menu-item">
          <h3>Pasta</h3>
          <p>$8</p>
          <button onClick={() => addItemToOrder('Pasta')}>Add to Order</button>
        </div>
      </div>
      <div className="order-summary">
        <h2>Order Summary</h2>
        <ul>
          {selectedItems.map((item, index) => (
            <li key={index}>{item} <button onClick={() => removeItemFromOrder(item)}>Remove</button></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Order;

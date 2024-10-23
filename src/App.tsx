import React from 'react';
import OrderTracking from './components/order/OrderTracking';
import './App.css';
function App() {
  return (
    <div className="App">
      <OrderTracking 
        orderNumber="Y34XDHR"
        expectedArrival="01/11/24"
        trackingNumber="23409456724242342898"
        currentStep={4}  
      />
    </div>
  );
}

export default App;

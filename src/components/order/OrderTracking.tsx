import React from 'react';
import './OrderTracking.css'; 

interface OrderTrackingProps {
  orderNumber: string;
  expectedArrival: string;
  trackingNumber: string;
  currentStep: number; 
}

const steps = [
  { label: 'Order Processed', icon: '📦' },
  { label: 'Order Shipped', icon: '🚚' },
  { label: 'Order En Route', icon: '🛣️' },
  { label: 'Order Arrived', icon: '🏠' },
]; 

const OrderTracking: React.FC<OrderTrackingProps> = ({ orderNumber, expectedArrival, trackingNumber, currentStep }) => {
  const progressWidth = (currentStep - 1) * (100 / (steps.length - 1));

  return (
   
    <div className="order-tracking">
      <div className="order-status-container">
        <div className="order-info">
          <span className="order-text">ORDER</span>
          <span className="order-id">#{orderNumber}</span>
        </div>
        
        <div className="progress-dots">
          <div className="dot"></div>
          <div className="dot"></div>
        </div>

        <div className="tracking-info">
          <span className="arrival">Expected Arrival: {expectedArrival}</span>
          <span className="">USPS </span>
          <span className="tracking-number"> {trackingNumber}</span>

        </div>
        </div>

      <div className="progress-bar">
        <div className="progress-bar-line">
          <div className="progress-bar-line fill" style={{ width: `${progressWidth}%` }}></div>
        </div>

        {steps.map((step, index) => (
          <div key={index} className="progress-step-container">
            <div className={`progress-step ${currentStep >= index ? 'active' : ''}`}></div>
            <div className="circle">{index <= currentStep ? '✔' : '○'}</div>
            <div className="details">
            <span className="icon">{step.icon}</span>
            <p className='label'>{step.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
   
   
  );
};

export default OrderTracking;

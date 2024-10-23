// src/api/tracking.ts
import axios from 'axios';

interface TrackingData {
  orderId: string;
  trackingNumber: string;
  expectedArrival: string;
  status: string;
  steps: string[];
}

// Function to fetch data from an API endpoint
export const getTrackingInfo = async (orderId: string): Promise<TrackingData> => {
  // Replace with your real API endpoint
//   const response = await axios.get(`/api/tracking/${orderId}`);
//   return response.data;

const response = await axios.get(`http://localhost:3001/api/tracking/${orderId}`);
return response.data;
};

// If you're testing, you can mock the data like this:
export const getMockTrackingInfo = async (orderId: string): Promise<TrackingData> => {
  return {
    orderId: orderId,
    trackingNumber: "234094567242423422898",
    expectedArrival: "2024-12-01",
    status: "Shipped",
    steps: ["Order Processed", "Order Shipped", "Order En Route", "Order Arrived"]
  };
};

// import axios from 'axios';

// interface TrackingData {
//   orderId: string;
//   trackingNumber: string;
//   expectedArrival: string;
//   status: string;
//   steps: string[];
// }

// export const getTrackingInfo = async (orderId: string): Promise<TrackingData> => {
//   const response = await axios.get(`/api/tracking/${orderId}`);
//   return response.data;
// };

// export const getMockTrackingInfo = async (orderId: string): Promise<TrackingData> => {
//   return {
//     orderId: orderId,
//     trackingNumber: "234094567242423422898",
//     expectedArrival: "2024-12-01",
//     status: "Shipped",
//     steps: ["Order Processed", "Order Shipped", "Order En Route", "Order Arrived"]
//   };
// };

// import axios from 'axios';

// interface TrackingData {
//   status: string;
//   trackingNumber: string;
//   expectedArrival: string;
//   steps: string[];
// }

// export const getTrackingInfo = async (orderId: string): Promise<TrackingData> => {
//   const response = await axios.get(`/api/tracking/${orderId}`);
//   return response.data;
// };

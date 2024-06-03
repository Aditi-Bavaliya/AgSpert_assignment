import db from './db.json';
export const fetchActiveOrders = async () => {
    // Replace with actual API call
    return [
      { id: 1, customer: 'Spider', price: 100, date: '24/5/2024 (11:07 PM)' },
      { id: 2, customer: 'Spider', price: 210, date: '24/5/2024 (11:30 PM)' },
    ];
  };
  
//   export const fetchCompletedOrders = async () => {
//     try {
//       const response = await fetch('/api/sale_orders'); // Replace with your actual API endpoint
      
//       // Check if the response is JSON
//       const contentType = response.headers.get('content-type');
//       if (!contentType || !contentType.includes('application/json')) {
//         const errorText = await response.text();
//         throw new Error(`Unexpected response type: ${contentType}. Response body: ${errorText}`);
//       }
      
//       const data = await response.json();
//       if (!response.ok) {
//         throw new Error(data.message || 'Network response was not ok');
//       }
      
//       return data;
//     } catch (error) {
//       console.error('Fetch error:', error);
//       throw error;
//     }
//   };
 // Assuming the JSON file is named db.json and resides in the same directory as your React components

// export const fetchActiveOrders = async () => {
//   // Assuming the active orders are stored in the db.json file under the 'active_orders' key
//   return db.active_orders;
// };

export const fetchCompletedOrders = async () => {
  // Assuming the completed orders are stored in the db.json file under the 'completed_orders' key
  return db.sale_orders;
};
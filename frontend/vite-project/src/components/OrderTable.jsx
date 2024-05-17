import React, { useState } from 'react';
import { fetchorders } from './fetchorders';

const OrderManagementTable = () => {
  const [orders, setOrders] = useState([]);
  useState(() => {
    fetchorders().then((data) => {
      setOrders(data);
    });
  }, []);


  const [sortBy, setSortBy] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');
  const [filterStatus, setFilterStatus] = useState('All');

  const handleSort = (key) => {
    if (sortBy === key) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(key);
      setSortDirection('asc');
    }
  };

  const handleFilter = (status) => {
    setFilterStatus(status);
  };

  const filteredOrders = orders.filter(order => filterStatus === 'All' || order.status === filterStatus);

  if (sortBy) {
    filteredOrders.sort((a, b) => {
      const comparison = a[sortBy] > b[sortBy] ? 1 : -1;
      return sortDirection === 'asc' ? comparison : -comparison;
    });
  }

  return (
    <div className="overflow-x-auto">
       
        <div className="mt-2 flex justify-top">
        
  <div className="mt-2 flex justify-between items-center">
    <h1 className="text-lg font-semibold mr-4">Latest orders</h1>
    <div className="flex items-center">
      <label htmlFor="filter" className="mr-4">Filter:</label>
      <select
        id="filter"
        className="font-small rounded-md border border-gray-300 shadow-sm p-1 mr-4"
        value={filterStatus}
        onChange={(e) => handleFilter(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
        {/* Add more status options here */}
      </select>
    </div>
 
 
</div>

      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="rounded-md border border-gray-300 shadow-sm p-1 mr-4">
          <tr>
            <th
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
              onClick={() => handleSort('id')}
            >
              ID
            </th>
            <th
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
              onClick={() => handleSort('date')}
            >
              Phone Number
            </th>
            <th
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
              onClick={() => handleSort('product')}
            >
              Product
            </th>
            <th
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
              onClick={() => handleSort('customer')}
            >
              Customer
            </th>
            <th
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
              onClick={() => handleSort('total')}
            >
              Total
            </th>
            <th
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
              onClick={() => handleSort('status')}
            >
              Status
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 ">
            
          {filteredOrders.map(order => (
            <tr key={order.id}>
              <td className="px-6 py-4 whitespace-nowrap">{order.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{order.phone}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                  {/* Check if order.products is an array before mapping over it */}
                  {Array.isArray(order.products) ? (
                    order.products.map((product, index) => (
                      <div key={index}>
                        <span>{product.name}</span>
                        <span className="text-gray-500">{product.quantity}</span>
                        <br />
                      </div>
                    ))
                  ) : (
                    // Render a placeholder if order.products is not an array
                    <span>N/A</span>
                  )}
                </td>
              <td className="px-6 py-4 whitespace-nowrap">{order.customer}</td>
              <td className="px-6 py-4 whitespace-nowrap">{order.amount}</td>
              <td className="px-6 py-4 whitespace-nowrap">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default OrderManagementTable;

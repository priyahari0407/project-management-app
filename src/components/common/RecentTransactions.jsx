import React from "react";
// Sample data
const transactionsData = [
  {
    id: 1,
    customerId: "CUST-001",
    sku: "SKU-12345",
    date: "2024-06-15",
    price: "$49.99",
    status: "Completed",
  },
  {
    id: 2,
    customerId: "CUST-002",
    sku: "SKU-67890",
    date: "2024-06-16",
    price: "$79.99",
    status: "Pending",
  },
];
export default function RecentTransactions() {
  return (
    <div className="col-span-12 p-4 rounded border border-stone-300">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="flex items-center gap-1.5 font-bold text-stone-700">
          Recent Transactions
        </h2>
        <button className="text-blue-600 hover:underline">View All</button>
      </div>
      <table className="w-full table-auto">
        <thead>
          <tr className="text-sm font-normal text-stone-500">
            <th className="text-start p-1.5">CUSTOMER ID</th>
            <th className="text-start p-1.5">SKU</th>
            <th className="text-start p-1.5">Date</th>
            <th className="text-start p-1.5">Price</th>
            <th className="text-start p-1.5"></th>
          </tr>
        </thead>
        <tbody>
          {transactionsData.map((transaction) => (
            <tr
              key={transaction.id}
              className="text-sm font-normal text-stone-500"
            >
              <td className="p-1.5">{transaction.customerId}</td>
              <td className="p-1.5">{transaction.sku}</td>
              <td className="p-1.5">{transaction.date}</td>
              <td className="p-1.5">{transaction.price}</td>
              <td className="p-1.5">{transaction.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

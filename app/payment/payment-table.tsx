import React, { type JSX } from "react";

export default function PaymentTable(): JSX.Element {
  const tableHeadings = [
    "Transaction Id",
    "Date",
    "Amount",
    "Payment Method",
    "Payment Status",
    "VAT Invoice ID",
  ];

  return (
    <table className="bg-white w-full">
      <thead>
        <tr className="text-lg sm:text-xl">
          {tableHeadings.map((heading) => (
            <th key={heading} className="table-border py-2 text-left px-1 md:px-4">
              {heading}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {Array(10)
          .fill("")
          .map((index) => (
            <tr key={index} className="h-14 xl:text-lg hover:bg-gray-100 hover:cursor-pointer">
              <td className="table-border px-1 md:px-4  text-blue-600">1234567890</td>
              <td className="table-border px-1 md:px-4">12/05/23</td>
              <td className="table-border px-1 md:px-4">Rs. 2000</td>
              <td className="table-border px-1 md:px-4">Rupay</td>
              <td className="table-border px-1 md:px-4  text-green-600">Paid</td>
              <td className="table-border px-1 md:px-4">xyz</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

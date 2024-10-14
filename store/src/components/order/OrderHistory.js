import React from "react";
import dayjs from "dayjs";

const OrderHistory = ({ order, currency }) => {
  return (
    <>
      <td className="px-5 py-3 leading-6 whitespace-nowrap">
        <span className="uppercase text-[19px] text-gray-500 font-normal">
          {order?._id?.substring(20, 24)}
        </span>
      </td>
      <td className="px-5 py-3 leading-6 text-center whitespace-nowrap">
        <span className="text-[19px] text-gray-500 font-normal">
          {dayjs(order.createdAt).format("MMMM D, YYYY")}
        </span>
      </td>

      <td className="px-5 py-3 leading-6 text-center whitespace-nowrap">
        <span className="text-[19px] text-gray-500 font-normal">{order.paymentMethod}</span>
      </td>
      <td className="px-5 py-3 leading-6 text-center whitespace-nowrap font-medium text-[19px] font-normal">
        {order.status === "Delivered" && (
          <span className="text-emerald-500">{order.status}</span>
        )}
        {order.status === "Pending" && (
          <span className="text-orange-500">{order.status}</span>
        )}
        {order.status === "Cancel" && (
          <span className="text-red-500">{order.status}</span>
        )}
        {order.status === "Processing" && (
          <span className="text-indigo-500">{order.status}</span>
        )}
      </td>
      <td className="px-5 py-3 leading-6 text-center whitespace-nowrap">
        <span className="text-[19px] text-gray-500 font-normal font-bold">
          {currency}
          {parseFloat(order?.total).toFixed(2)}
        </span>
      </td>
    </>
  );
};

export default OrderHistory;

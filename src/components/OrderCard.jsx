import { useState, Fragment } from "react";

function OrderCard({ order }) {
  const [open, setOpen] = useState(false);

  return (
    <>
     
      <tr className="border-b border-gray-700 hover:bg-gray-800 transition">
        <td className="px-4 py-3 font-medium">{order.orderId}</td>
        <td className="px-4 py-3">{order.company}</td>
        <td className="px-4 py-3">
          <span className="px-2 py-1 text-xs rounded bg-yellow-600/20 text-yellow-400">
            {order.status}
          </span>
        </td>
        <td className="px-4 py-3">{order.totalQuantityOrdered}</td>
        <td className="px-4 py-3">
          <button
            onClick={() => setOpen(prev => !prev)}
            className="px-3 py-1 text-sm rounded bg-blue-600 hover:bg-blue-700 transition"
          >
            {open ? "Hide Items" : "View Items"}
          </button>
        </td>
      </tr>

      
      {open && (
        <tr className="bg-gray-900">
          <td colSpan="5" className="p-4">
            <div className="rounded-lg border border-gray-700 overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-gray-800">
                  <tr>
                    <th className="px-3 py-2 text-left">Item</th>
                    <th className="px-3 py-2 text-left">Species</th>
                    <th className="px-3 py-2 text-left">Quantity</th>
                    <th className="px-3 py-2 text-left">Image</th>
                  </tr>
                </thead>
                <tbody>
                  {order.items.map(item => (
                    <tr
                      key={item.itemName}
                      className="border-t border-gray-700"
                    >
                      <td className="px-3 py-2">{item.itemName}</td>
                      <td className="px-3 py-2">{item.species}</td>
                      <td className="px-3 py-2">
                        {item.totalItemQuantity}
                      </td>
                      <td className="px-3 py-2">
                        <img
                          src={item.itemImage}
                          alt={item.itemName}
                          className="w-14 h-14 object-cover rounded border border-gray-600"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}

export default OrderCard;

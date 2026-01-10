import OrderCard from "./OrderCard";
import { getPages } from "../services/getPages";
function Pagination(
  {
    orders, 
    currentPage, 
    setCurrentPage, 
    totalPages = "",
    total,
    limit
  }
) {
  
  if(!totalPages) {
    console.log("total", total)
    totalPages = Math.ceil(total/limit);
  }

  console.log(`total pages: ${totalPages}`);
    return <div className="h-full w-full flex justify-start items-center bg-gray-950 text-white py-10 flex-col">
      <div className="w-11/12 lg:w-3/4">
        <h1 className="text-xl font-semibold mb-4">Orders</h1>

        <div className="overflow-x-auto rounded-lg border border-gray-700">
          <table className="w-full border-collapse">
            <thead className="bg-gray-900">
              <tr>
                <th className="px-4 py-3 text-left">Order ID</th>
                <th className="px-4 py-3 text-left">Company</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Total Qty</th>
                <th className="px-4 py-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <OrderCard key={order.id} order={order} />
              ))}
            </tbody>
          </table>
        </div>
 
        <div className="flex justify-end mt-4 text-sm text-gray-400">
          Page {currentPage} of {totalPages}
        </div>
        <div className="flex justify-end mt-4 textsm gap-2">
          <button
          disabled={currentPage === 1}
          className={currentPage === 1 ? "disable" : ""}
          onClick={() => setCurrentPage(prev => prev - 1)}
          >
            {"<"}
          </button>

          {
            getPages(currentPage, totalPages).map((page, index, arr) => {
              return  <span key={index}>
                {
                  index > 0 && page - arr[index - 1] > 1 && "..."
                }
              
              <button
              disabled={currentPage === page}
              className={currentPage === page ? "active" :""}
              onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
              </span>
              
            })
          }

          <button
          disabled={currentPage >= totalPages}
          className={currentPage >= totalPages ? "disable" : ""}
          onClick={() => setCurrentPage(prev => prev + 1)}
          >
            {">"}
          </button>        
      </div>
      </div>
    </div>
}

export default Pagination;
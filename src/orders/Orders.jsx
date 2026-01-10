import { useEffect, useState } from "react";
import { fetchData } from "../services/fetchOrders";


import "./Orders.css"
import Pagination from "../components/Pagination";
import PageLoader from "../components/PageLoader";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(0);

  useEffect(() => {
    console.log("useEffect ")
    async function getData() {
      try {
        const response = await fetchData(currentPage);
        console.log(response)
        setOrders(response.paginatedData);
        setTotal(response.total);
        setLimit(response.limit)
        setTotalPages(response.pagination.total_pages);
      } catch (error) {
        console.log(error)
      }finally{
        setLoading(false);
      }
    }
    getData();
  }, [currentPage]);


  if(loading) return <PageLoader />


  if (!orders.length) {
    return (
      <div className="h-screen flex items-center justify-center text-gray-400">
        Orders not found
      </div>
    );
  }


  return <Pagination
  orders={orders}
  currentPage={currentPage}
  setCurrentPage={setCurrentPage}
  totalPages={totalPages}
  total={total}
  limit={limit}
  />
}

export default Orders;

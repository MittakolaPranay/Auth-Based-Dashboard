import { useEffect, useState } from "react";
import { getProducts } from "../services/productServices";
import ProductCard from "../components/ProductCard";
import "./BackendPagination.css"

function BackendPagination() {
    const [products, setProducts] = useState([]);
    const [totalPages, setTotalPages] = useState(null)
    const [currentPage, setCurrentPage] = useState(0);

    console.log("current page :",currentPage)

    const handleRequest = async () => {
        try {
            const response = await getProducts(currentPage);
            console.log(response.products);
            setProducts(response.products);
            setTotalPages(response.total_pages);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        handleRequest();
    },[currentPage])

    return products.length ? 
    <div className="flex items-center justify-center flex-col gap-4 p-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {
                products.map((product) => {
                    return <ProductCard key={product.id} thumbnail={product.thumbnail} title={product.title}/>
                })
            }
        </div>
        <div className="flex gap-2 items-center">
          {/* Prev */}
  <button
    disabled={currentPage === 0}
    onClick={() => setCurrentPage(p => p - 1)}
  >
    Prev
  </button>

  {/* Page numbers with dots */}
  {[...Array(totalPages)].map((_, pageIndex) => {
    const isFirst = pageIndex === 0;
    const isLast = pageIndex === totalPages - 1;
    const isNearCurrent = Math.abs(pageIndex - currentPage) <= 1;

    // show only required pages
    if (!isFirst && !isLast && !isNearCurrent) {
      return null;
    }

    // insert dots when there is a gap
    if (
      pageIndex > 0 &&
      Math.abs(pageIndex - currentPage) === 2
    ) {
      return <span key={`dots-${pageIndex}`}>...</span>;
    }

    return (
      <button
        key={pageIndex}
        onClick={() => setCurrentPage(pageIndex)}
        style={{
          fontWeight: pageIndex === currentPage ? "bold" : "normal"
        }}
      >
        {pageIndex + 1}
      </button>
    );
  })}

  {/* Next */}
  <button
    disabled={currentPage === totalPages - 1}
    onClick={() => setCurrentPage(p => p + 1)}
  >
    Next
  </button>

        </div>


    </div> : 
    <h1 className="text-center">Products not found</h1>
}

export default BackendPagination;
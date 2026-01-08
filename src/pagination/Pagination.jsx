import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "./Pagination.css"

function Pagination() {

    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

    const PRODUCTS_PER_PAGE = 10;
    const TOTAL_PAGES = Math.floor(products.length/PRODUCTS_PER_PAGE) + 1;

    // let productsArray = [];

    const start = currentPage * PRODUCTS_PER_PAGE;
    const end = start + PRODUCTS_PER_PAGE;

    // if(products.length) {
    //     for(let i = start; i < end; i++) {
    //         productsArray[i] = products[i];  
    //     }
    // }

    const fetchData = async () => {
        const response = await axios.get("https://dummyjson.com/products?limit=194");
        setProducts(response.data.products);
    }

    useEffect(() => {
        fetchData();
    },[]);

    
    return products ? 
    <div className="h-screen flex md:justify-center md:items-center flex-col w-full">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-10">
            {
                products.slice(start, end).map((product) =>  <ProductCard key={product.id} thumbnail={product.thumbnail} title={product.title}/>)
            }
        </div>
        <div className="flex flex-wrap gap-3">
            <button disabled={currentPage === 0} onClick={() => setCurrentPage(prev => prev - 1)}>{"<-"}</button>
            {
                [...Array(TOTAL_PAGES).keys()].map((n) => {
                    return <button className={currentPage === n ? "active" : ""} key={n} onClick={() => setCurrentPage(n)}>{n+1}</button>
                })
            }
             <button disabled={currentPage >= TOTAL_PAGES - 1} onClick={() => setCurrentPage(prev => prev + 1)}>{"->"}</button>
        </div>
    </div> : 
    <h1>Products Not Found</h1>
}   

export default Pagination;
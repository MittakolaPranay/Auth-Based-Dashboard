
function ProductCard({thumbnail, title}) {
    return <div className="border border-amber-100 rounded-md md:h-50 md:w-50 flex justify-center items-center flex-col py-5">
        <h1 className="text-2xl text-center">{title}</h1>
        <img className="w-25" src={thumbnail} alt={title} />
    </div>
}


export default ProductCard;
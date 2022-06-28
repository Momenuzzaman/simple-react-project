import { useEffect, useState } from "react"

const useProduct = () => {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        fetch('product.json')
            .then(response => response.json())
            .then(data => setProduct(data))
    }, [])
    return [products]
}

export default useProduct;
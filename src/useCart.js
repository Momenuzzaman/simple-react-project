import { useState } from "react"

const useCart = (product) => {
    const [cart, setCart] = useState()

    const newCart = [...cart, product]
    setCart(newCart)
    return [cart, setCart]
}
export default useCart;
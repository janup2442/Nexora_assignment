import axios from "axios"
import { useState, useEffect } from 'react'
import CartItem from "../components/CartItem"
import ErrorBlock from "../components/errorBlock"

const CartPage = () => {
    const [cartList, setCartList] = useState([])
    const [total,setTotal] = useState(2)
    const [itemsCount, setItemCount] = useState(0)
    const getCartItem = async () => {
        try {
            const result = await axios.get(`${import.meta.env.VITE_API_URL}/api/cart`)
            if (result?.status >= 200 && result.status < 400) {
                setCartList(result.data)
                
            }

            if(cartList.length > 0){
                cartList.map(item=>{
                    setTotal(total + (item.qty)*(item.productId.price))
                    setItemCount(itemsCount + item.qty)
                })
            }
        } catch (error) {
            alert(error.message)

        }
    }

    const deleteCartItem = async (productId) => {
        try {
            const result = await axios.delete(`${import.meta.env.VITE_API_URL}/api/cart/${productId}`)
            if (result.status >= 200 && result.status < 400) {
                alert(result.data.message)
                getCartItem()
            }
        } catch (error) {
            alert(error.message)
        }
    }

    const updateCartItem = async () => {
        try {
            alert("Feature yet to be defined");
        } catch (error) {
            alert(error.message)
        }
    }

    useEffect(() => {
        getCartItem()
    }, [])
    return (
        <>
            <div className="position-relative">
                <div>
                    {
                        cartList?.length > 0 ? cartList.map((item, index) => (
                            <CartItem image={item.productId.image} initialQuantity={item.qty} price={item.productId.price} title={item.productId.title} onDelete={deleteCartItem} onUpdate={updateCartItem} id={item.productId._id} />
                        )) : (<ErrorBlock message={'Something went wrong'} />)
                    }
                </div>
                <div className="position-fixed bottom-0 w-100">
                    <div className="bg-light d-flex justify-content-center align-items-center">
                        <div>
                            <p className="h3 fw-semibold">Total Amount : {total}</p>
                            <p className="text-subtle">Items : {itemsCount}</p>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default CartPage
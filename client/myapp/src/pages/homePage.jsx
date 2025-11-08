import {useState,useEffect} from 'react'
import Box from '@mui/material/Box'
import axios  from 'axios'
import ErrorBlock from '../components/errorBlock'
import ProductCard from '../components/ProductCard'


const HomePage = ()=>{
    const [productList,setProductList] = useState([])
    const [error,setError] = useState({
        status:false,
        message:"",
        error:null
    })
    const getProduct = async () => {
        try {
            const result = await axios.get(`${import.meta.env.VITE_API_URL}/api/products`)
            if(result.status >=200 && result.status<400){
                setProductList(result.data)
            }
        } catch (error) {
            setError({
                status : true,
                message:"Internal Server Error",
                error:error.message
            })
            console.log(error.message);
        }
    }

    
    useEffect(()=>{
        getProduct();
    },[])
    return(
        <>
            <div className=''>
                <div className='row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5'>
                    {
                        productList?.length>0?productList.map((item,index)=>(
                            <ProductCard key={index} product={item} />
                        )):(<ErrorBlock errorMessage={'Something went wrong.'}/>)
                    }
                </div>
            </div>
        </>
    )
}

export default HomePage
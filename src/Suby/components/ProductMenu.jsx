import React,{useState,useEffect} from 'react';
import { API_URL } from '../Api';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';





const ProductMenu = () => {
    const [product,setProduct] = useState([])
    const {firmId,firmName} = useParams()

 const productHandler = async()=>{

    try{
    const res = await fetch(`${API_URL}/product/${firmId}/products`)
    const newProduct= await res.json()
    setProduct(newProduct.products)
   
    }
    catch(error){
        console.error("product failed to fetch",error)
    }
 }

 useEffect( ()=>{
    productHandler()
 },[] )


  return (
    <>
    <Navbar/>
  
      <h3  style={{textIndent:"140px",marginTop:"140px"}} >{firmName}  </h3>
    <div className='product-total' >
        

        {product.map( (item)=>{
            return(
               <>
              
               <div className="product-section">
                   <div className="product-details">
                     
                   <ul>
                    
                    <li> <strong> {item.productName}</strong> </li>
                    <li> {item.price} ₹ </li>
                    <li> {item.category}  </li>
                    <li> {item.description}  </li>
                   
                   </ul>
                   </div>
                  <div className='product-image' >
                  <div><img src={`${API_URL}/uploads/${item.image}`} alt="" /></div>
                  <button>ADD</button>
                  </div>
               </div>
               </>
            )
        } )}
    </div>
    </>
  );
}

export default ProductMenu;

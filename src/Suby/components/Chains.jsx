
import React,{useState,useEffect} from 'react';
import { API_URL } from '../Api';
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { MagnifyingGlass } from 'react-loader-spinner';

const Chains = () => {
    const[vendorData,setVendorData] = useState([]);
    const[scrollPosition,setScrollPosition] = useState(0);
    const[loadind,setLoading] = useState(true)

    const handleScroll =( direction )=>{
      const gallery = document.getElementById("chainGallery");
      const scrollAmount = 500;
      if(direction==="left"){
        gallery.scrollTo({
          left:gallery.scrollLeft-scrollAmount,
          behaviour:"smooth"
        }) }
        else if(direction==="right"){
          gallery.scrollTo({
            left:gallery.scrollLeft+scrollAmount,
            behaviour:"smooth"
          })
        }
      

    }

    const VendorFirmHandler = async()=>{
      try{
              const res = await fetch(`${API_URL}/vendor/all-vendors`)
              const newData = await res.json();
              setVendorData(newData)
              setLoading(false)
      }
      catch(err){console.log(err)
        setLoading(true)

      }
    }
     useEffect( ()=>{
         VendorFirmHandler()

    },[] )
  return (
    <>
         {loadind &&   
         <div  className='loading' >
          <h2> Loading</h2>
          <MagnifyingGlass
  visible={true}
  height="80"
  width="80"
  ariaLabel="magnifying-glass-loading"
  wrapperStyle={{}}
  wrapperClass="magnifying-glass-wrapper"
  glassColor="#c0efff"
  color="#e15b64"
  />

         </div>
         }
    <h2>chin restaurants in hyderabad</h2>
      <div className="btn-section">
      <button  onClick={()=>handleScroll("left")} ><FaArrowAltCircleLeft /></button>
      <button  onClick={()=>handleScroll("right")} ><FaArrowAltCircleRight /></button>
      </div>
    <section className="chain-section"  id='chainGallery' onScroll={  (e)=> setScrollPosition(e.target.scrollLeft) }>
     {
      vendorData.vendors && vendorData.vendors.map( (vendor)=>{
        return(
          <>
            <div className="vendor-box">
                {
                  vendor.firm.map( (item)=>{
                    return(
                      <>
                      
                      {/* {item.firmName} */}
                      <div className="chain-image">
                        <img src={`${API_URL}/uploads/${item.image}`} alt="" />
                      </div>
                      </>
                      
                    )
                  } )
                }
            </div>
          </>
        )
      } )
     }


    </section>
    </>

  )
}

export default Chains;

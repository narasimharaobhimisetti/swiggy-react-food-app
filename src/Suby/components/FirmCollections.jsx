import React, { useState,useEffect } from 'react';
import { API_URL } from '../Api';
import { Link } from 'react-router-dom';
import { MagnifyingGlass } from 'react-loader-spinner'


const FirmCollections = () => {
  const[firmData,setFirmData] = useState([])
  const[selectedRegion,setSelectedRegion] = useState("ALL")
  const[activeButton,setActiveButton] = useState("all")
  

  const firmDataHandler = async()=>{
    try{
  const res = await fetch(`${API_URL}/vendor/all-vendors`)
  const newFirmData= await res.json()
  
  setFirmData(newFirmData.vendors)
 
  
 

    }
    catch(error){
      alert("data not fetched")
      console.error("data not fetched",error)
     

    }
  } 
 
   useEffect( ()=>{
    firmDataHandler()
   },[] )


   const filterHandler=(region,active)=>{
    setSelectedRegion(region)
    setActiveButton(active)
   }
  
  return (
    <>
    <h2>
      Restaurants wit online food delivery in hyderabad
    </h2>
    <div className="filter-buttons">
      <button  onClick={()=>filterHandler("ALL","all")} 
      className={activeButton==="all" ? "activeBut" :"" }
      >ALL</button>
      <button  onClick={()=>filterHandler("South-Indian","south-indian")   }  
        className={activeButton==="south-indian" ? "activeBut" :"" }
      >South-Indian</button>
      <button  onClick={()=>filterHandler("North-Indian","north-indian")}
       className={activeButton==="north-indian" ? "activeBut" :"" }
      >North-Indian</button>
      <button  onClick={()=>filterHandler("Chinese","chinese")} 
       className={activeButton==="chinese" ? "activeBut" :"" }
      >Chinese</button>
      <button onClick={()=>filterHandler("Bakery","bakery")}
       className={activeButton==="bakery" ? "activeBut" :"" }
      >Bakery</button>
    </div>
      
    
    <div className="firm-section">
      {firmData.map( (apple)=>{
  
   return apple.firm.map( (item)=>{
    if(selectedRegion === "ALL"  || item.region.includes(selectedRegion.toLocaleLowerCase()) )
    {
     
        return(
          <>
          <Link  to={`/product/${item._id}/${item.firmName}`} >
          <div className='firm-total' >
          <div className='firm-image' >
            <img src={`${API_URL}/uploads/${item.image}`} alt="" />
          </div>
          <div className="firm-offer">
            {item.offer.toUpperCase()}
          </div>
          <div className="firm-details">
             <ul>
              <li  id='firm-firmName' > {item.firmName} </li>
              <li> {item.region.join('  ,  ')} </li>
              <li> {item.area} </li>
              <li> {item.category[0]} </li>
              <li> {item.category[1]} </li>
             </ul>
          </div>
           
          </div>
          </Link>
          </>
        )
    
    }
   } )

        return  null
      } )}

    </div>
    </>
  );
}

export default FirmCollections;

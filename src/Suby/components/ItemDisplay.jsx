
import React,{useState} from 'react';
import { itemData } from '../ItemData';


const ItemDisplay = () => {
    const[displayItems,setDisplayItems] = useState(itemData)
  return (
    <>
    <div className="item-section">
        {   
        displayItems.map(  (item)=>{
            return(
                <div className='item-image' >
                    <img src={item.image} alt="" />
                </div>            )
        } )
        }
    </div>
    </>
  );
}

export default ItemDisplay;

import React from 'react';
import Navbar from '../components/Navbar';
import ItemDisplay from '../components/ItemDisplay';
import Chains from '../components/Chains';
import FirmCollections from '../components/FirmCollections';


const LandingPage = () => {
  return (
    <div  className='landing-section' >
      <Navbar/>
      <ItemDisplay/>
      <Chains/>
      <FirmCollections/>
     
    </div>
  );
}

export default LandingPage;

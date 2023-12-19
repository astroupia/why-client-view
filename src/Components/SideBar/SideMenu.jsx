// Sidebar/Sidemenu.jsx

import React from 'react';
import './Sidebar.css'; // Importing sidebar styles
import logo from '../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';


const Sidemenu = () => {
  return (
   <div> 

<div className="logo">
        <img className='img' src={logo} alt='logo' />
        </div>
    <div className="sidebar-menu">
        
      <div className="sidemenu">
          <h1 className='h12'>Fund setter</h1>
          <h1 className='h13'>About us</h1>
          <h1 className='h14'>Terms - Policy</h1>
          <h1 className='h15'>Contact</h1> 
        
     </div>


       <div className='thebutton'>
          <button className="signup-b">Sign Up</button>
           
          <button className="signin-f">Sign in</button>
        </div>
          

          
        <div className='thelogo'>
             <FontAwesomeIcon icon={faFacebookSquare} style={{   fontSize: '40px', color: '#004225' ,}} />
             <FontAwesomeIcon icon={faTwitter} style={{ fontSize: '40px', color: '#004225' }} />
             <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '40px', color: '#004225' }} />
          </div>
     
    </div>



    </div>
  );
};

export default Sidemenu;

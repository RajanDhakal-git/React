import React from 'react';
import ReactDom from 'react-dom';
import './index.css'
import  Landing from './EcommerceComponents/Landing'
import Aboutus from './EcommerceComponents/AboutUs'
import Cards from './EcommerceComponents/Cards'
 import Services from './EcommerceComponents/Services'
 import Join from './EcommerceComponents/Join'
import Footer from './EcommerceComponents/Footer'
ReactDom.render(
<>
  <Landing/>,
  <Aboutus/>,
  <Join/>,
  <Cards/>,
  <Services/>,
<Footer/>
  </>,
  document.getElementById('root')
  
);
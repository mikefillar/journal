import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import AboutUs from './AboutUs'
import ProductInformation from '../components/ProductInformation.js'
import ContactUsForm from './ContactUs'
// import Table from '../components/Table.js' 
function Index() {
  return (
    <Router>    
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/AboutUs' element={<AboutUs/>}/>
            <Route exact path='/AddProduct' element={<ProductInformation/>}/>
            <Route exact path='/ContactUs' element={<ContactUsForm/>}/>
            {/* <Route exact path='/ProductInformation' element={<Table/>}/> */}
        </Routes>
    </Router>
  )
}
export default Index

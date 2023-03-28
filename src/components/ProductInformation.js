import React,{useState,useEffect } from 'react'
import { Container} from 'reactstrap'
import Form from './Form'
import Table from './Table.js'

const ProductInformation = () => {
let [ProductName, setProductName] = useState("");
let [ProductPrice, setProductPrice] = useState("");
let [ProductInfos, setProductInfos] = useState(JSON.parse(localStorage.getItem('Products')) ? JSON.parse(localStorage.getItem('Products')) : []);
let [ProductID, setProductID] = useState("");
let HandleProductID = (event)=> {
  setProductID(event.target.value);
  console.log(event.target.value);
}
let HandleProductName = (event)=> {
    setProductName(event.target.value);
    console.log(event.target.value);
}
let HandleProductPrice = (event)=> {
    setProductPrice(event.target.value);
    console.log(event.target.value);
}
let HandleSubmitForm = (event)=> {
  event.preventDefault();
  if (ProductName !== "" && ProductPrice>0 && ProductID!=="")
    {
      let ProductInfo = {ProductID,ProductName,ProductPrice};
      setProductInfos([...ProductInfos,ProductInfo]);
      // window.location.href = '/ProductInformation';
      alert("Product Addedd!");
      setProductID("");
      setProductName("");
      setProductPrice("");
    }
  else
    {
      console.log("Invalid Product Name or Product Price!");
    }
}
useEffect(()=>{
  localStorage.setItem("Products", JSON.stringify(ProductInfos));
})
  return (
    <Container className='text-center col-lg-6'>
        <div>
            <h3 className='display-6'>Product Information</h3>
            <Form ProductName={ProductName} HandleProductName={HandleProductName} ProductPrice={ProductPrice} 
            HandleProductPrice={HandleProductPrice} HandleSubmitForm={HandleSubmitForm} ProductID={ProductID}
            HandleProductID={HandleProductID}/>
            <Table/>
        </div>
           
    </Container>
  )
}

export default ProductInformation
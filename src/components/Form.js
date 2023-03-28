import React from 'react'
import {Form as BTForm, FormGroup, Input, Label, Col, Button} from 'reactstrap'

const Form = ({ProductName,HandleProductName,ProductPrice,HandleProductPrice, HandleSubmitForm, ProductID, HandleProductID}) => {
  return (
        <BTForm onSubmit={HandleSubmitForm}>
            <FormGroup className='row mt-5'>
                <Label className='form-label' lg={3} for='ProductID'>Product ID</Label>
                <Col lg={8}><Input type='text' id='ProductID' name='ProductID' placeholder='Enter Product ID' value={ProductID} onChange={HandleProductID}></Input></Col>
                
            </FormGroup>
            <FormGroup className='row'>
                <Label className='form-label' lg={3} for='ProductName'>Product Name</Label>
                <Col lg={8}><Input type='text' id='ProductName' name='ProductName' placeholder='Enter Product Name' value={ProductName} onChange={HandleProductName}></Input></Col>
                
            </FormGroup>
            <FormGroup className='row'>
                <Label className='form-label' lg={3} for='ProductPrice'>Product Price</Label>
                <Col lg={8}><Input type='text' id='ProductPrice' name='ProductPrice' placeholder='0.00' value={ProductPrice} onChange={HandleProductPrice}></Input></Col>
                
            </FormGroup>
            <Button type='Submit' color="primary">Submit</Button>
        </BTForm>
  )
}

export default Form
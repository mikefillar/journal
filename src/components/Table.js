import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import { CheckBox } from '@mui/icons-material';


// let checkValue = checkBox.value;
// function isItemSelected()
//     {
//         let checkBox = document.querySelector("input[type=checkbox]:checked");
//         console.log(checkBox);
//         let checkVal = checkBox.value;
//         console.log(checkVal);
//         let result = JSON.parse(window.localStorage.getItem(checkVal));
//         // console.log(result);
//         // console.log(result);
//         // console.log(checkValue);
//         if(result==null)
//             {
//                 console.log("No Records!");
//             }
//         else
//             {
//                 console.table(result);
//             }
            
//     }

export default function BasicTable() {
let rows = JSON.parse(localStorage.getItem("Products"));
console.log(rows);
  return (
    <div>
        <div className='col-lg-6 ms-auto'>
        <input className='form-control mt-3 mb-2' type="text" name="" value="" placeholder='Search Product'/>
        </div>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell><h5></h5></TableCell>
                <TableCell><h5>Product ID</h5></TableCell>
                <TableCell><h5>Product Name</h5></TableCell>
                <TableCell ><h5>Product Price</h5></TableCell>
                <TableCell ><h5>Action</h5></TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <TableRow>
                <TableCell ><input type="checkbox" name="" value={row.ProductID}/></TableCell>
                <TableCell >{row.ProductID}</TableCell>
                <TableCell>{row.ProductName}</TableCell>
                <TableCell>{row.ProductPrice}</TableCell>
                <TableCell ><a href="#" className='text-success'>Update</a> / <a href="#" className='text-danger'>Delete</a></TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
        {/* <div className='text-center col-lg-12 mt-5'>
            <h2>Update or Delete Product</h2>
            <label for="prodID" className='form-label'>Product ID</label>
            <input type="text" className='form-control' name="prodID" value=""/>
            <label for="prodID" className='form-label'>Product Name</label>
            <input type="text" className='form-control' name="prodName" value=""/>
            <label for="prodID" className='form-label'>Product Price</label>
            <input type="text" className='form-control' name="prodPrice" value=""/>
        </div> */}
    </div>
  );
}
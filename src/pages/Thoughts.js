import React,{useEffect,useState,useRef} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Thoughts() {
let dateRef = useRef(null);
let messageRef = useRef(null);
let [ID,setID] = useState(Date.now());
let [thoughts,setThoughts] = useState(JSON.parse(localStorage.getItem("Thoughts"))?JSON.parse(localStorage.getItem("Thoughts")) : []);
function handleSubmit(event)
  {
    event.preventDefault();
        let thought = {
          ID: ID,
          Date: dateRef.current.value,
          Message: messageRef.current.value
        }
        if (thought.Date === "" || thought.Message==="")
          {
            alert("Please enter your thoughts!");
          }
        else
          {
            setThoughts([...thoughts,thought]);
            alert(JSON.stringify(thought));
            messageRef.current.value = "";
          }
  }
useEffect(()=>{
  localStorage.setItem("Thoughts",JSON.stringify(thoughts));
})
let dtToday = new Date();
let nDate = dtToday.getDate();
let nMonth = dtToday.getMonth() + 1;
if (nMonth<10) {
  nMonth = "0" + nMonth;
}
if (nDate<10) {
  nMonth = "0" + nDate;
}
let nYear = dtToday.getFullYear();
let today = `${nYear}-${nMonth}-${nDate}`;
let rows = JSON.parse(localStorage.getItem("Thoughts"));
console.log(rows);
function handleDeleteClick(id)
  {
    let newList = thoughts.filter( tsk => tsk.ID !== id);
    setThoughts(newList);
    alert("Thoughts Deleted!");
  }
// function handleUpdateClick(id)
//   {
//     let update = tasks.filter(tsk=> tsk.ID == id);
//     update = JSON.stringify(update);
//     alert(update);
//     let upMessage = update.Date;
//     alert(upMessage);
//     dateRef.current.value = "";
  return (
    <div className='col-lg-6 bg-info border rounded text-white mt-5 p-3'>
          <div className='col-lg-6'><h5>Create thoughts for the day.</h5></div>
          <form onSubmit={handleSubmit}>
            <div className='col-lg-4 ms-auto mb-2'>
            <input type="date" className='form-control' name="date" value={today} min={today} max={today}  ref={dateRef} id="date"/>
            </div>
            <textarea className='form-control' name='message'  ref={messageRef} rows="5"  cols="30"></textarea>
            <div className='col-lg-2 ms-auto m-2'><button  type="submit" className='btn btn-warning form-control'>Save</button></div>
          </form>
          <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
              <TableRow>
                  <TableCell><h5>My thoughts for the day</h5></TableCell>
                  <TableCell><h5></h5></TableCell>
                  <TableCell><h5></h5></TableCell>
              </TableRow>
              </TableHead>
              <TableBody>
              {rows.map((row) => (
                  <TableRow>
                  {/* <TableCell >{row.ID}</TableCell> */}
                  <TableCell >{row.Date}</TableCell>
                  <TableCell>{row.Message}</TableCell>
                  {/* <TableCell ><a href="#" onClick={()=>handleUpdateClick(row.ID)} className='text-success'>Update</a> / <a href="#" onClick={()=>handleDeleteClick(row.ID)}  className='text-danger'>Delete</a></TableCell> */}
                  <TableCell ><a href="#" onClick={()=>handleDeleteClick(row.ID)}  className='text-danger'>Delete</a></TableCell>
                  </TableRow>
              ))}
              </TableBody>
          </Table>
          </TableContainer>
      </div>
  )
}

export default Thoughts
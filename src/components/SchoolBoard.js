import React from 'react'

const SchoolBoard = (props) => {
  return (
    <tr>
      <td>{props.ID}</td>
      <td>{props.category}</td>
      <td>{props.post}</td>
      {/* <h3>ID: {props.ID}</h3>
        <h3 style={{display: !props.category && "none" , color: !props.post && "lightblue"}}>Category : {props.category}</h3>
        <h3 style={{display: !props.post && "none", color: !props.category && "red" }}>Post : {props.post}</h3> */}
    </tr>     
  )
}

export default SchoolBoard
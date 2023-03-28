import React from 'react'

const ArrayNumber = () => {
    let arrayNumber = [4,9,16,25];
    let newArray = arrayNumber.map(num => Math.sqrt(num));
  return (
    <p>The square root of {arrayNumber.toString()} numbers are {newArray.toString()}</p>
  )
}

export default ArrayNumber
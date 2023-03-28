import '../css/style.css'
import ContacCardDetails from './ContactCardDetails'
import React from 'react'

const ContacCardMain = () => {
  return (
    <div className='contacts'>
        <ContacCardDetails 
        contact={
            {
                name: 'kebs',
                imgUrl: './logo512.png',
                phoneNum: '09123456789',
                email: 'kebs@gmail.com'
            }
                }/>
        <ContacCardDetails 
        contact={
            {
                name: 'nald',
                imgUrl: 'http://placekitten.com/400/400',
                phoneNum: '09129876543',
                email: 'nald@gmail.com'
            }
                }/>
        <ContacCardDetails 
        contact={
            {
                name: 'daryl',
                imgUrl: 'http://placekitten.com/400/300',
                phoneNum: '09132456789',
                email: 'daryl@gmail.com'
            }
                }/>
        <ContacCardDetails 
        contact={
            {
                name: 'mike',
                imgUrl: 'http://placekitten.com/400/200',
                phoneNum: '09132456789',
                email: 'mike@gmail.com'
            }
                }/>
    </div>
  )
}

export default ContacCardMain
import React from 'react'
import './User.css'

const User = ({singleP}) => {
  return (
    <div className='user_card'>
        <img src={singleP.img} alt="" />
        <h4>{singleP.name}</h4>
        <p>Email: {singleP.email}</p>
        <p>City: {singleP.address.street}, {singleP.address.city}</p>
        <p>Company Name: {singleP.company.name}</p>
        <p>Phone: {singleP.phone}</p>
    </div>
  )
}

export default User
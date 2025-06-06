import React from 'react'
import './User.css'

const User = ({singleP}) => {
  return (
    <div className='user_card'>
        <img src={singleP.img} alt="" />
        <h4>{singleP.name}</h4>
        <p><strong>Email:</strong> {singleP.email}</p>
        <p><strong>City: </strong> {singleP.address.street}, {singleP.address.city}</p>
        <p><strong>Company Name: </strong>{singleP.company.name}</p>
        <p><strong>Phone: </strong> {singleP.phone}</p>
    </div>
  )
}

export default User
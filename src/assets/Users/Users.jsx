import React from 'react'
import {Data} from './Data.jsx'
import User from './User.jsx'

const Users = () => {
  return (
    <>
    <div id="Products">
        {Data.map((card)=>{
            return(
                <div id='product_cards'>
                    <User singleP={card}/>
                </div>
            )
        }
        )}
    </div>
    </>
  )
}

export default Users
import React from 'react'
import "./Profilescreen.css"
import Nav from './Nav'
import { auth } from './firebase'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
function Profilescreen() {
   
    const user = useSelector(selectUser);

  return (
    <div className='profilescreen'>
        <Nav />
        <div className='profilescreen_body'>
           <h1>Edit Profile</h1>
           <div className='profilescreen_info'>
            <img src='https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg' />
             <div className='profilescreen_details'>
                <h2>{user.email}</h2>
                <div className='profilescreen_plans'>

                    <h3>Plans</h3>
                    <button onClick={() => auth.signOut()} className='profilescreen_signout'>Sign Out</button>
                </div>
             </div>
           </div>
        </div>
    </div>
  )
}

export default Profilescreen
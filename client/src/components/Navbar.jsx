import React from 'react'
import { assets } from '../assets/assets'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { Link } from 'react-router-dom'
import Applications from '../pages/Applications'

const Navbar = () => {

  const {openSignIn} = useClerk()
  const {user} = useUser()


  return (
    <div className='shadow py-5'>
        <div className='container px-1 2xl:px-20 mx-auto flex justify-between items-center'>
            <img src={assets.logo} alt="not found" />
            {
              user
              ? <div className='flex items-center gap-3'>
                <Link to={Applications}>Applied Jobs</Link>
              <p>|</p>
              <p className='max-sm:hidden'>Hi, {user.firstName+" "+ user.lastName}</p>
              <UserButton />
                 </div>
              :<div className='flex gap-4 max-sm:text-xs'>
                <button className='text-gray-700 '>recruiter login</button>
                <button onClick={e => openSignIn()} className='bg-blue-400 text-white px-6 sm:px-9 py-2 rounded-full'>login</button>
            </div>
            }
          
        </div>
    </div>
  )
}

export default Navbar
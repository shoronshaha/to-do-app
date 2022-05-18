import React, { useState } from 'react';
import CustomLink from '../CustomLink/CustomLink';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }

    let [open, setOpen] = useState(false);
    return (
        <div className='shadow-md w-full top-0 left-0 '>
            <div className='md:flex items-center justify-between bg-white py-2 md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
                    <span className='text-3xl text-indigo-600 mr-1 pt-2'>
                        <h1 className='text-2xl'>To-Do</h1>
                    </span>

                </div>

                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 font-[Poppins] ease-in block ${open ? 'top-18 ' : 'top-[-490px]'}`}>


                    {
                        user && <>
                            <li className='md:ml-8 text-[16px] md:my-0 my-7 text-gray-800 hover:text-gray-400 duration-500 font-bold '><CustomLink to='/addTask'>ADD TASK</CustomLink></li>
                            <li className='md:ml-8 text-[16px] md:my-0 my-7 text-gray-800 hover:text-gray-400 duration-500 font-bold '><CustomLink to='/allTask'>ALL TASK</CustomLink></li>

                        </>

                    }

                    {
                        user ?
                            <li onClick={handleSignOut} className='md:ml-8 text-[16px] md:my-0 my-7 text-gray-800 hover:text-gray-400 duration-500 font-bold '><CustomLink to='/login'>LOGOUT</CustomLink></li>
                            :
                            <li className='md:ml-8 text-[16px] md:my-0 my-7 text-gray-800 hover:text-gray-400 duration-500 font-bold '><CustomLink to='/login'>LOGIN</CustomLink></li>
                    }
                </ul>

            </div>
        </div>
    )
};

export default Navbar;
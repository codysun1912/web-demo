import React from 'react'
import SignIn from './SignIn';
import LogOut from './LogOut';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function Navbar() {
    const [user] = useAuthState(auth)

    return (
        <div className='bg-gray-800 h-20 flex justify-between items-center p-4'>
            <h1 className='text-white text-3xl'>Chat app</h1>
            {user ? <LogOut /> : <SignIn />}
        </div>
    )
}

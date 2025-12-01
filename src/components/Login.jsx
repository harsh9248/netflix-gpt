import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
  const [isSignInForm , setIsSignInForm] = useState(true);

  const toggleSignInFrom = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
      <Header />
      <div className='absolute'>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/6fd9d446-cd78-453a-8c9c-417ed3e00422/web/IN-en-20251117-TRIFECTA-perspective_2fe4e381-977f-49fd-a7f4-1da0bcf09429_large.jpg" srcset="https://assets.nflxext.com/ffe/siteui/vlv3/6fd9d446-cd78-453a-8c9c-417ed3e00422/web/IN-en-20251117-TRIFECTA-perspective_2fe4e381-977f-49fd-a7f4-1da0bcf09429_large.jpg 2000w, https://assets.nflxext.com/ffe/siteui/vlv3/6fd9d446-cd78-453a-8c9c-417ed3e00422/web/IN-en-20251117-TRIFECTA-perspective_2fe4e381-977f-49fd-a7f4-1da0bcf09429_medium.jpg 1279w, https://assets.nflxext.com/ffe/siteui/vlv3/6fd9d446-cd78-453a-8c9c-417ed3e00422/web/IN-en-20251117-TRIFECTA-perspective_2fe4e381-977f-49fd-a7f4-1da0bcf09429_small.jpg 959w" alt="" aria-hidden="true"></img>
      </div>

    <form className='absolute w-3/12 p-8 space-y-8 bg-black my-36 mx-auto bg-opacity-80 right-0 left-0 text-white rounded-md'>
      <h1 className='font-bold text-xl'>{isSignInForm ? 'Sign In' : 'SignUp'}</h1>
      <input type="text" placeholder='Email Address' className='p-2 border border-solid border-black to-black w-full bg-slate-600' />
      {isSignInForm && <input type="text" placeholder='Name' className='p-2 border border-solid  border-black to-black w-full  bg-slate-600'/>}
      <input type="password" placeholder='Password' className='p-2 border border-solid  border-black to-black w-full  bg-slate-600'/>
      <button className='p-4 h-13 bg-red-700 w-full rounded-md'>{isSignInForm ? 'Sign In' : 'SignUp'}</button>
      <p className='cursor-pointer' onClick={toggleSignInFrom}> {isSignInForm ? 'New to netflix? Sign Up Now' : 'Already a user ? Sign In now'}</p>
    </form>

    </div>
  )
}

export default Login;

import React from 'react'
import Borwse from './Borwse';
import Login from './Login';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router';

const Body = () => {

const appRouter = createBrowserRouter([
  {
    path : "/",
    element: <Login/>
  }, 
  {
    path : "/browse", 
    element: <Borwse/>
  }
])

  return (
    <div>
     <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body;

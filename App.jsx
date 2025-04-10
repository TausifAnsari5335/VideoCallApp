
import './App.css'
import {createBrowserRouter , Router, RouterProvider} from "react-router-dom"

import HomePage from "./components/HomePage";  
import VideoPage from "./components/VideoPage"; 

function App() {
  
  const router = createBrowserRouter([
    {
      path :"/",
      element:<HomePage/>
    },
    {
      path:"/room/:id",
      element:<VideoPage/>
    }
  ])

  return (
    
      <div className='App'>

        <RouterProvider router={router}>

        </RouterProvider>
      </div>
    
  )
}

export default App

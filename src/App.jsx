import {createBrowserRouter,RouterProvider,createRoutesFromElements,Route} from "react-router-dom"
import First from "./Pages/First"
import Second from "./Pages/Second"
import Third from "./Pages/Third"
import Effect from "./Pages/Effect"

function App() {

  const router=createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={<First/>}/>
      <Route path="/second" element={<Second/>}/>
      <Route path="/third" element={<Third/>}/>
      <Route path="/effect" element={<Effect/>}/>
      </>
    )
  )


  return (
    <>
   <RouterProvider router={router}/>
    </>
  )
}

export default App

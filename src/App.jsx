import { Outlet } from "react-router-dom"

function App() {
  return (
    <div className='App'>
      <h1>Starting Point</h1>
       
       <Outlet></Outlet>
    </div>
  )
}

export default App

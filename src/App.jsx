import './App.css'
import CookingDetails from './Components/CookingDetails/CookingDetails'
import Navbar from './Components/Navbar/Navbar'
import Recipes from './Components/Recipes/Recipes'

function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <div className='md:flex'>
      <Recipes></Recipes>
      <CookingDetails></CookingDetails>
      </div>
    </>
  )
}

export default App

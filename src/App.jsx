import { useState } from 'react'
import './App.css'
import CookingDetails from './Components/CookingDetails/CookingDetails'
import Navbar from './Components/Navbar/Navbar'
import Recipes from './Components/Recipes/Recipes'

function App() {
  const [cookingDetails, setCookingDetails] = useState([]);

  const handleAddToCook = recipe => {
      const newCookingDetails = [...cookingDetails, recipe];
      setCookingDetails(newCookingDetails);
  }

  return (
    <>
      <Navbar></Navbar>
      <div className='md:flex'>
        <Recipes handleAddToCook={handleAddToCook}></Recipes>
        <CookingDetails cookingDetails={cookingDetails}></CookingDetails>
      </div>
    </>
  )
}

export default App

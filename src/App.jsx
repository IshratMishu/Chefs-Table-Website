import { useState } from 'react'
import './App.css'
import CookingDetails from './Components/CookingDetails/CookingDetails'
import Navbar from './Components/Navbar/Navbar'
import Recipes from './Components/Recipes/Recipes'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [cookingDetails, setCookingDetails] = useState([]);

  const handleAddToCook = recipe => {
    const isExist = cookingDetails.find(cookingDetail => cookingDetail.recipe_id == recipe.recipe_id);
    if (!isExist) {
      const newCookingDetails = [...cookingDetails, recipe];
      setCookingDetails(newCookingDetails);
    }
    else {
      toast.error("Already Exist!");
    }
  }



  return (
    <>
      <Navbar></Navbar>
      <div className='md:flex gap-10'>
        <Recipes handleAddToCook={handleAddToCook}></Recipes>
        <CookingDetails cookingDetails={cookingDetails}></CookingDetails>
      </div>
      <ToastContainer />
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import CookingDetails from './Components/CookingDetails/CookingDetails'
import Navbar from './Components/Navbar/Navbar'
import Recipes from './Components/Recipes/Recipes'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [cookingDetails, setCookingDetails] = useState([]);
  const [currentCookings, setCurrentCooking] =useState([]);


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

  const handlePreparing = recipe_id=> {
    const newCook = cookingDetails.filter(cookingDetail => cookingDetail.recipe_id !== recipe_id);
    setCookingDetails(newCook);
    if(!newCook){
      const cooker = [...currentCookings, recipe_id];
      setCurrentCooking(cooker);
    }
  }




  return (
    <>
      <Navbar></Navbar>
      <div className='md:flex gap-10'>
        <Recipes handleAddToCook={handleAddToCook}></Recipes>
        <CookingDetails cookingDetails={cookingDetails} handlePreparing={handlePreparing} ></CookingDetails>
      </div>
      <ToastContainer />
    </>
  )
}

export default App

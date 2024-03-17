import { useState } from 'react'
import './App.css'
import CookingDetails from './Components/CookingDetails/CookingDetails'
import Navbar from './Components/Navbar/Navbar'
import Recipes from './Components/Recipes/Recipes'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Banner from './Components/Banner/Banner'
import RecipeTitle from './Components/RecipeTitle/RecipeTitle'
import CurrentCooking from './Components/CurrentCooking/CurrentCooking'


function App() {
  const [cookingDetails, setCookingDetails] = useState([]);
  const [currentCooking, setCurrentCooking] =useState([]);
  


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
    console.log(newCook);
  }

  
const handleCurrentCook = (recipe_id) => {
  const removedCookingDetail = cookingDetails.find(cookingDetail => cookingDetail.recipe_id === recipe_id);

  if (removedCookingDetail) {
    const newCurrentCooking = [...currentCooking, removedCookingDetail];
    setCurrentCooking(newCurrentCooking);
    console.log(newCurrentCooking); 
  } 
};

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <RecipeTitle></RecipeTitle>
      <main className='md:flex gap-10'>
        <div className='md:w-3/5'>
        <Recipes handleAddToCook={handleAddToCook}></Recipes>
        </div>
        <div className='md:w-2/5 border-2'>
        <CookingDetails cookingDetails={cookingDetails} handlePreparing={handlePreparing} handleCurrentCook={handleCurrentCook}></CookingDetails>
        <CurrentCooking currentCooking={currentCooking} handleCurrentCook={handleCurrentCook} handlePreparing={handlePreparing}></CurrentCooking>
        </div>
      </main>
      <ToastContainer />
    </>
  );
}

export default App;

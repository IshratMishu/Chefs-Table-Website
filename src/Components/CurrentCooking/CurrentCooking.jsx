// import { useState } from "react";
import PropTypes from 'prop-types';

const CurrentCooking = ({currentCooking}) => {
    // const [currentCookings, setCurrentCooking] = useState([]);

    // const handleCook = recipe => {
    //     const isExist = currentCookings.find(currentCooking => currentCooking.recipe_id == recipe.recipe_id);
    // if (!isExist) {
    //   const newCookingDetails = [...currentCookings, recipe];
    //   setCurrentCooking(newCookingDetails);
    // }
    // }
    return (
        <div>
            <h2 className='font-lexend font-semibold text-2xl text-center mt-5 mb-2'>Currently cooking:{currentCooking} </h2>
            <hr />
            <table className='font-firaSans font-medium w-full mt-2'>
                <tbody className='flex justify-between'>  
                         <td></td>        
                        <td className='w-1/4'>Name</td>
                        <td className='w-1/4'>Time</td>
                        <td className='w-1/4'>Calories</td>              
                </tbody>
            </table>
        </div>
    );
};
CurrentCooking.propTypes = {
    currentCooking: PropTypes.array,
    // handlePreparing: PropTypes.func
}

export default CurrentCooking;
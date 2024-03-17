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
            <h2 className='font-lexend font-semibold text-2xl text-center'>Currently cooking:{currentCooking} </h2>
            <hr />
            <table className='font-firaSans font-medium text-[#878787]'> 
            <tbody>
            <tr className='flex'>
                <td></td>
                <td>Name</td>
                <tr className='flex'>
                <td>Time</td>
                <td>Calories</td>
                </tr>
                <td></td>
            </tr>       
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
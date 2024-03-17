
import PropTypes from 'prop-types';

const CurrentCooking = ({currentCooking}) => {
    
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
    currentCooking: PropTypes.array
}

export default CurrentCooking;
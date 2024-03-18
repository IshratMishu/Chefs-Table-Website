import PropTypes from 'prop-types';
import SingleCook from '../SingleCook/SingleCook';

const CurrentCooking = ({ totalCalories, totalTime, currentCooking, handleCurrentCook }) => {

    return (
        <div className='p-5'>
            <h2 className='font-lexend font-semibold text-2xl text-center mt-5 mb-2'>Currently cooking: {currentCooking.length}</h2>
            <hr />
            <table className='font-firaSans font-medium w-full mt-2'>
                <tbody className='flex justify-between'>
                    <td></td>
                    <td className='w-1/4'>Name</td>
                    <td className='w-1/4'>Time</td>
                    <td className='w-1/4'>Calories</td>
                </tbody>
            </table>
            {
                currentCooking.map((singleCook, idx) => <SingleCook key={idx} idx={idx}
                    singleCook={singleCook} handleCurrentCook={handleCurrentCook}></SingleCook>)
            }

            <table className='font-firaSans font-medium w-full mt-10'>
                <tbody className='flex justify-between'>
                    <td></td>
                    <td className='w-1/4'></td>
                    <td className='w-1/4'>Total Time={totalTime}</td>
                    <td className='w-1/4'>Total Calories={totalCalories}</td>
                </tbody>
            </table>
        </div>
    );
};
CurrentCooking.propTypes = {
    currentCooking: PropTypes.array,
    handleCurrentCook: PropTypes.func,
    totalTime: PropTypes.number,
    totalCalories: PropTypes.number
}

export default CurrentCooking;
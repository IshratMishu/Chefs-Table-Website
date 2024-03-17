import PropTypes from 'prop-types';
import SingleCook from '../SingleCook/SingleCook';

const CurrentCooking = ({ currentCooking, handleCurrentCook }) => {

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
                //  currentCooking.map((cookingDetail, idx) => <CookingDetail key={idx} idx={idx} cookingDetail={cookingDetail} handlePreparing={handlePreparing} handleCurrentCook={handleCurrentCook}></CookingDetail>)
                currentCooking.map((singleCook, idx) => <SingleCook key={idx} idx={idx} 
                singleCook={singleCook} handleCurrentCook={handleCurrentCook}></SingleCook>)
            }
        </div>
    );
};
CurrentCooking.propTypes = {
    currentCooking: PropTypes.array,
    handleCurrentCook: PropTypes.func
    // handlePreparing: PropTypes.func
}

export default CurrentCooking;
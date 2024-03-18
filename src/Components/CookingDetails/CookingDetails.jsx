import PropTypes from 'prop-types';
import CookingDetail from '../CookingDetail/CookingDetail';


const CookingDetails = ({ cookingDetails, handlePreparing, handleCurrentCook }) => {

    return (
        <div className="p-5">
            <h2 className='font-lexend font-semibold text-2xl text-center mb-2'>Want to cook: {cookingDetails.length}</h2>
            <hr />
            <table className='font-firaSans font-medium w-full mt-2'>
                <tbody className='flex justify-between'>
                    <td className='w-1/12'></td>
                    <td className='w-1/4'>Name</td>
                    <td className='w-1/4'>Time</td>
                    <td className='w-1/4'>Calories</td>
                    <td className='w-1/4'></td>
                </tbody>
            </table>
            {
                cookingDetails.map((cookingDetail, idx) => <CookingDetail key={idx} idx={idx} cookingDetail={cookingDetail} handlePreparing={handlePreparing} handleCurrentCook={handleCurrentCook}></CookingDetail>)
            }
        </div>
    );
};

CookingDetails.propTypes = {
    cookingDetails: PropTypes.array,
    handlePreparing: PropTypes.func,
    handleCurrentCook: PropTypes.func
}


export default CookingDetails;
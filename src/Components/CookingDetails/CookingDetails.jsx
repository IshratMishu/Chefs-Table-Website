import PropTypes from 'prop-types';
import CookingDetail from '../CookingDetail/CookingDetail';
import CurrentCooking from '../CurrentCooking/CurrentCooking';


const CookingDetails = ({ cookingDetails, handlePreparing }) => {
    

    return (
        <div className="md:w-2/5 p-5 border-2">
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
                cookingDetails.map((cookingDetail, idx) => <CookingDetail key={idx} idx={idx} cookingDetail={cookingDetail} handlePreparing={handlePreparing}></CookingDetail>)
            }

            <CurrentCooking handlePreparing={handlePreparing}></CurrentCooking>
        </div>
    );
};
CookingDetails.propTypes = {
    cookingDetails: PropTypes.array,
    handlePreparing: PropTypes.func,
}


export default CookingDetails;
import PropTypes from 'prop-types';
import CookingDetail from '../CookingDetail/CookingDetail';


const CookingDetails = ({ cookingDetails }) => {
    return (
        <div className="md:w-2/5 p-5 border-2">
            <h2 className='font-lexend font-semibold text-2xl text-center'>Want to cook: {cookingDetails.length}</h2>
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
            {
                cookingDetails.map((cookingDetail, idx)=> <CookingDetail key={idx} idx={idx} cookingDetail={cookingDetail}></CookingDetail>)
            }
        </div>
    );
};

CookingDetails.propTypes = {
    cookingDetails: PropTypes.array
}


export default CookingDetails;
import PropTypes from 'prop-types';
import CookingDetail from '../CookingDetail/CookingDetail';


const CookingDetails = ({ cookingDetails }) => {
    return (
        <div className="md:w-2/5">
            <h2>cooking details: {cookingDetails.length}</h2>
            <table>
            <tbody>
            <tr>
                <td>Name</td>
                <td>Time</td>
                <td>Calories</td>
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
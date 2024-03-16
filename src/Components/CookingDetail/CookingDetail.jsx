import PropTypes from 'prop-types';

const CookingDetail = ({ cookingDetail, idx }) => {
    const { recipe_name, preparing_time, calories } = cookingDetail;

    return (
         <table>
            <tbody>
            <tr>
                <td>{idx+1}</td>
                <td>{recipe_name}</td>
                <td>{preparing_time}</td>
                <td>{calories}</td>
                <td><button>Preparing</button></td>
            </tr>
            </tbody>
        </table>
    );
};

CookingDetail.propTypes = {
    cookingDetail: PropTypes.object.isRequired
}

export default CookingDetail;
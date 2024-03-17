import PropTypes from 'prop-types';


const CookingDetail = ({ handlePreparing, cookingDetail, idx }) => {
    const { recipe_name, preparing_time, calories } = cookingDetail;
    


    return (
        <div className='grid lg:grid-flow-col grid-cols-1'>
            <table className='font-firaSans font-medium text-[#878787]'>
                <tbody>
                    <tr className='flex gap-5'>
                        <td>{idx + 1}</td>
                        <td>{recipe_name}</td>
                        <td>{preparing_time}</td>
                        <td>{calories}</td>
                    </tr>
                </tbody>
            </table>
            <button onClick={() => handlePreparing(cookingDetail.recipe_id)} className='bg-[#0BE58A] px-2 rounded-xl'>Preparing</button>
        </div>
    );
};

CookingDetail.propTypes = {
    cookingDetail: PropTypes.object.isRequired,
    idx: PropTypes.number,
    handlePreparing: PropTypes.func
}

export default CookingDetail;
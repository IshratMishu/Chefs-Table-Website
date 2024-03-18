import PropTypes from 'prop-types';


const CookingDetail = ({handlePreparing, cookingDetail, idx, handleCurrentCook}) => {
    const { recipe_name, preparing_time, calories } = cookingDetail;


    return (
        <div className='grid lg:grid-flow-col grid-cols-1 space-y-4'>
            <table className='font-firaSans font-medium text-[#878787]'>
                <tbody className='mb-3'>
                    <tr className='flex gap-5 space-y-4 items-center'>
                        <td className='text-black'>{idx + 1}</td>
                        <td className='w-1/4'>{recipe_name}</td>
                        <td className='w-1/4'>{preparing_time}</td>
                        <td className='w-1/4'>{calories}</td>
                    </tr>
                </tbody>
            </table>
            <button onClick={()=>{
                handlePreparing(cookingDetail.recipe_id)
                handleCurrentCook(cookingDetail.recipe_id)
            }}  
            className='bg-[#0BE58A] hover:bg-[#a1a8a4] px-2 rounded-xl text-black font-semibold font-lexend ml-2'>Preparing</button>
        </div>
    );
};

CookingDetail.propTypes = {
    cookingDetail: PropTypes.object.isRequired,
    idx: PropTypes.number,
    handlePreparing: PropTypes.func,
    handleCurrentCook: PropTypes.func  
}

export default CookingDetail;
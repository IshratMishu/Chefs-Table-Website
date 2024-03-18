import PropTypes from 'prop-types';

const SingleCook = ({singleCook, idx}) => {
    const { recipe_name, preparing_time, calories } = singleCook;
    return (
        <div>
            <table className='font-firaSans font-medium text-[#878787] w-full mt-2'>
                <tbody className='flex justify-between'>
                        <td className='text-black'>{idx + 1}</td>
                        <td className='w-1/4'>{recipe_name}</td>
                        <td className='w-1/4'>{preparing_time}</td>
                        <td className='w-1/4'>{calories}</td>   
                </tbody>
            </table>
        </div> 
    );
};

SingleCook.propTypes = {
    singleCook: PropTypes.object.isRequired,
    idx: PropTypes.number
}

export default SingleCook;
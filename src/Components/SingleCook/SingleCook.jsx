import PropTypes from 'prop-types';

const SingleCook = ({singleCook, idx}) => {
    const { recipe_name, preparing_time, calories } = singleCook;
    return (
        <div>
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
        </div>
      
    );
};

SingleCook.propTypes = {
    singleCook: PropTypes.object.isRequired,
    idx: PropTypes.number
}

export default SingleCook;
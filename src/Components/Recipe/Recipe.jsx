import { IoTimeOutline } from "react-icons/io5";
import { RiFireLine } from "react-icons/ri";
import PropTypes from 'prop-types';

const Recipe = ({ recipe, handleAddToCook }) => {
    const { recipe_image, recipe_name, short_description, ingredients, preparing_time, calories } = recipe;

    return (
        <div className="shadow-2xl hover:shadow-md hover:shadow-[#0BE58A] rounded-2xl p-5 space-y-3">
            <img className="rounded-2xl" src={recipe_image} alt="recipe" />
            <h2 className="font-lexend font-semibold text-xl text-[#282828]">{recipe_name}</h2>
            <p className="font-firaSans leading-6 text-[#878787]">{short_description}</p>
            <hr />
            <div>
                <h2 className="font-lexend font-medium text-lg text-[#282828]">Ingredients: {ingredients.length}</h2>
                {
                    ingredients.map((ingredient,idx) => <li key={idx} className="font-firaSans text-[#878787] leading-8 text-lg">{ingredient}</li>)
                }
            </div>
            <hr />
            <div className="font-firaSans text-[#282828] flex gap-10">
                <div className="flex gap-2 items-center">
                <IoTimeOutline />
                    <p>{preparing_time}</p>
                </div>
                <div className="flex gap-2 items-center">
                <RiFireLine />
                    <p>{calories}</p>
                </div>
            </div>
            <button onClick={ () => handleAddToCook(recipe)} className="font-lexend font-medium text-xl bg-[#0BE58A] rounded-3xl p-2 px-4">Want to Cook</button>
        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
    handleAddToCook: PropTypes.func.isRequired
}

export default Recipe;
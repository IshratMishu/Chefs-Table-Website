import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";
import PropTypes from 'prop-types';

const Recipes = ({handleAddToCook}) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])
    
    return (
        <div className="md:w-3/5 grid grid-cols-1 lg:grid-cols-2 gap-5">
            {
                recipes.map(recipe => <Recipe 
                    key={recipe.recipe_id} 
                    handleAddToCook={handleAddToCook}
                    recipe={recipe}></Recipe>)
            }
        </div>
    );
};

Recipes.propTypes = {
    handleAddToCook: PropTypes.func.isRequired
}

export default Recipes;
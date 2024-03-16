import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = () => {
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
                    recipe={recipe}></Recipe>)
            }
        </div>
    );
};

export default Recipes;
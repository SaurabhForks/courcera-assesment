import React from 'react'
import { getRecipeFromMistral } from '../../utils/ai';

const ViewIngredients = ({ ingredients, setIngredients, setShowRecipe, showRecipe, setRecipe }) => {
    {/* Ingredients List */ }
    const removeIngredient = (index) => {
        setIngredients(ingredients.filter((_, i) => i !== index));
    };
    const getRecipe = async () => {
        if (ingredients.length > 0) {
            setShowRecipe(true);
            const recipe = await getRecipeFromMistral(ingredients);
            setRecipe(recipe);
        }
    };
    return (
        <>
            <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-3">Ingredients on hand:</h2>
                {ingredients.length > 0 ? (
                    <ul className="space-y-2">
                        {ingredients.map((ingredient, index) => (
                            <li
                                key={index}
                                className="flex justify-between items-center pl-4 text-gray-700 relative before:absolute before:left-0 before:text-gray-900 before:content-['•'] before:mr-2"
                            >
                                <span>{ingredient}</span>
                                <button
                                    onClick={() => removeIngredient(index)}
                                    className="text-red-500 hover:text-red-700 font-medium transition-colors ml-4"
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div className="text-center py-4 bg-gray-50 rounded-lg">
                        <p className="text-gray-500">No ingredients added yet. Start by adding some!</p>
                    </div>
                )}
            </div>
            {/* Ready for Recipe Section */}
            {ingredients.length > 0 && !showRecipe && (
                <div className="p-4 bg-gray-100 rounded-lg mb-6">
                    <h3 className="font-semibold text-gray-900 mb-1">Ready for a recipe?</h3>
                    <p className="text-sm text-gray-600 mb-3">Generate a recipe from your list of ingredients.</p>
                    <button
                        onClick={getRecipe}
                        className="w-full py-2.5 bg-amber-300 text-gray-800 rounded-lg font-medium hover:bg-amber-400 transition-colors"
                    >
                        Get a recipe
                    </button>
                </div>
            )}
        </>
    )
}

export default ViewIngredients
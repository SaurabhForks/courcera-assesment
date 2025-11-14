import React, { useEffect, useState } from 'react'
import Markdown from 'react-markdown'
const ShowReciepie = ({ hideRecipe, recipe }) => {
    const [cleanedRecipe, setCleanedRecipe] = useState('');

    useEffect(() => {
        const data = recipe
            ? recipe.replace(/<think>/g, '')
            : '';
        setCleanedRecipe(data);
    }, [recipe])

    {/* Recipe Section */ }

    console.log("Rendering recipe: ", recipe, "Rendering cleanedRecipe: ", cleanedRecipe);

    return (
        <div className="p-6 bg-gray-100 rounded-lg">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-900">Suggested recipe:</h2>
                <button
                    onClick={hideRecipe}
                    className="text-gray-500 hover:text-gray-700 text-xl font-bold"
                >
                    ×
                </button>
            </div>
            {cleanedRecipe ? <div className="text-left"><Markdown >{cleanedRecipe}</Markdown></div> : <div>No recipe found</div>}
        </div>

    )
}

export default ShowReciepie
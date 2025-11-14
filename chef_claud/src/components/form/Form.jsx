import React, { useState } from 'react'

const Form = ({ ingredients, setIngredients }) => {
    {/* Add Ingredient Form */ }
    const [newIngredient, setNewIngredient] = useState('');
    const addIngredient = (e) => {
        e.preventDefault();
        if (newIngredient.trim()) {
            setIngredients([...ingredients, newIngredient.trim()]);
            setNewIngredient('');
        }
    };
    return (
        <>
            <form onSubmit={addIngredient} className="mb-6">
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={newIngredient}
                        onChange={(e) => setNewIngredient(e.target.value)}
                        placeholder="e.g., oregano"
                        className="flex-1 p-3 border-2 border-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 bg-white text-gray-900 placeholder-gray-500 font-medium transition-colors hover:border-gray-800" />
                    <button
                        type="submit"
                        className="px-4 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium whitespace-nowrap"
                    >
                        + Add ingredient
                    </button>
                </div>
            </form>

        </>
    )
}

export default Form
import React from 'react'

const Header = () => {
    return (
        <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900 flex items-center justify-center gap-2 mb-1">
                <span className="text-2xl">👨‍🍳</span>
                Chef Claude
            </h1>
            <p className="text-gray-600 text-sm">Enter your ingredients to get recipe ideas!</p>
        </div>
    )
}

export default Header
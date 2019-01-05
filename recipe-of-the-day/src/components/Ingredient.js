import React from 'react';

const Ingredient = (props) => {
    const ingredients = props.Ingredient;
    return (
        <div className="ingred">
            <ul>
                <li>Ingredient: {ingredients.ingredient}</li>
                <li>Amount: {ingredients.amount}</li>
            </ul>

        </div>
    )
}

export default Ingredient;

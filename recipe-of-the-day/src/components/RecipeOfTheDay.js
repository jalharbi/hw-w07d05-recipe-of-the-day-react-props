import React, {Component} from 'react';
import recipeOfTheDay from '../data/recipeOfTheDay';
import Ingredient from './Ingredient';

class IngredientsContainer extends Component{
    renderIngredients() {
        const IngredientElements = recipeOfTheDay.ingredients.map((post, index) => {
            return (
                <Ingredient Ingredient={post} key={index} />
            )
        });
        return IngredientElements;
    };


    render() {
        return (
            <div className="IngredientsContainer">
                <h2>Recipe of the Day</h2>
                <h2>{recipeOfTheDay.name}</h2>
                <h2>Description:</h2>
                <h2>{recipeOfTheDay.description}</h2>
                <h2>Ingredient</h2>
                {this.renderIngredients()}
            </div>
        );
    }
}




export default IngredientsContainer;
import React, { Component } from 'react';
import recipes from '../data/recipes';
import Recipe from './Recipe';


class RecipesContainer extends Component {
    renderRecipes() {
        const recipesElement = recipes.map((element, index2) => {
            return (
                <Recipe Recipe={element} key={index2} />
            )
        });

        return recipesElement;

    };


    render() {
        return (
            <div className="recipe">
                <h1>Recipes</h1>
                {this.renderRecipes()}
            </div>
        );
    }
    };


    export default RecipesContainer;
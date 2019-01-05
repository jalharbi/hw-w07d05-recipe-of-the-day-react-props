import React, { Component } from 'react';
import './App.css';
import IngredientsContainer from './components/RecipeOfTheDay';
import RecipesContainer from './components/Recipes';


class App extends Component {
  render() {
    return (
      <div className="App">
      {/* <h2>Recipe of the Day! </h2> */}
      <IngredientsContainer/>
      <RecipesContainer/>
      
      </div>
    );
  }
}

export default App;

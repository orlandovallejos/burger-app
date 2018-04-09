import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.4,
  meat: 1.3,
  cheese: 0.7
};

class BurgerBuilder extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  //This is the same than using the "constructor":
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4
  };

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const newCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = newCount;

    const price = INGREDIENT_PRICES[type];
    const newTotalPrice = this.state.totalPrice + price;

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newTotalPrice
    });
  };

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler} />
      </Aux>
    );
  }
}

export default BurgerBuilder;
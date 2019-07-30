import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import MealForm from './mealForm';
import './manageMenu.css';
export class ManageMenu extends Component {
  state = {
    meals: [
      { name: 'Semo and Meal', description: 'Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend.', price: 2400, imgurl: "https://res.cloudinary.com/ikeenjoku/image/upload/v1536724150/bookameal/2018-09-12T03:49:09.283ZUgwu-Archi.jpg.jpg" },
      { name: 'Semo and Meal', description: 'Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend.', price: 2400, imgurl: "https://res.cloudinary.com/ikeenjoku/image/upload/v1536724150/bookameal/2018-09-12T03:49:09.283ZUgwu-Archi.jpg.jpg" },
      { name: 'Semo and Meal', description: 'Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend.', price: 2400, imgurl: "https://res.cloudinary.com/ikeenjoku/image/upload/v1536724150/bookameal/2018-09-12T03:49:09.283ZUgwu-Archi.jpg.jpg" },
      { name: 'Semo and Meal', description: 'Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend.', price: 2400, imgurl: "https://res.cloudinary.com/ikeenjoku/image/upload/v1536724150/bookameal/2018-09-12T03:49:09.283ZUgwu-Archi.jpg.jpg" },
      { name: 'Semo and Meal', description: 'Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend.', price: 2400, imgurl: "https://res.cloudinary.com/ikeenjoku/image/upload/v1536724150/bookameal/2018-09-12T03:49:09.283ZUgwu-Archi.jpg.jpg" },
    ],
  }

  renderMeal = (meal) => {
    return (
      <div className="contain-meal">
        <div>
          <img src={meal.imgurl} alt="meal" className="meal-image" />
        </div>
        <div>{meal.name}</div>
        <div className="meal-desc">{meal.description}</div>
        <div>	&#8358;{meal.price}</div>
        <div>
          <span style={{ marginLeft: '25px' }}>
            <FontAwesomeIcon icon="edit" className="edit-btn" />
          </span>
          <span style={{ marginLeft: '25px' }}>
            <FontAwesomeIcon icon="trash-alt" className="remove-btn" />
          </span>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div>
        <p className="page-title">Manage Menu</p>
        <div className="meal-form-wrapper">
          <h2 className="form-title">Add a new meal</h2>
          <MealForm />
          <hr />
        </div>
        <div className="contain-meal-list">
          {
            this.state.meals.map(this.renderMeal)
          }
        </div>
      </div>
    )
  }
}

export default ManageMenu

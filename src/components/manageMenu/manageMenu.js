import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMenu } from '../../redux/actions/mealActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import MealForm from './mealForm';
import './manageMenu.css';
export class ManageMenu extends Component {

  componentDidMount() {
    this.props.fetchMenu();
  }

  renderMeal = (meal, index) => {
    return (
      <div key={index} className="contain-meal">
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

  renderNoContent = () => {
    return (
      <div>Nothing to see here</div>
    );
  }

  renderLoader = () => {
    return (
      <div>Loading</div>
    );
  }
  render() {
    const { menu, isLoading } = this.props;
    const renderContent = menu.length ? (
      <div className="contain-meal-list">
        {
          menu.map(this.renderMeal)
        }
      </div>
    ): this.renderNoContent();

    return (
      <div>
        <p className="page-title">Manage Menu</p>
        <div className="meal-form-wrapper">
          <h2 className="form-title">Add a new meal</h2>
          <MealForm />
          <hr />
        </div>
        {
          isLoading ? this.renderLoader() : renderContent
        }
      </div>
    )
  }
}

const mapStateToProps = ({ mealReducer }) => ({
  menu: mealReducer.menu,
  isLoading: mealReducer.isLoading,
  error: mealReducer.error,
});

export default connect(mapStateToProps, { fetchMenu })(ManageMenu);

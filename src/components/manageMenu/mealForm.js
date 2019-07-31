import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MealForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      meal: {
        name: props.meal ? props.meal.name : '',
        description: props.meal ? props.meal.description : '',
        price: props.meal ? props.meal.price : '',
        imageurl: props.meal ? props.meal.imageurl : '',
      },
      error: '',
    };
  }

  onFormInput = (event) => {
    event.preventDefault();
    const meal = this.state.meal;
    switch (event.target.name) {
      case 'imageurl':
        meal.imageurl = event.target.files[0];
        break;
      default:
        meal[event.target.name] = event.target.value;
    }
    this.setState({ meal });
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    const { name, price, description, imageurl } = this.state.meal;
    if (name && price && description && imageurl) {
      this.setState(() => ({ error: '' }));

      const formData = new FormData();
      formData.append('name', name);
      formData.append('price', price);
      formData.append('description', description);
      formData.append('imageurl', imageurl);
      this.props.onSubmit(formData);
    } else {
      this.setState(() => ({ error: 'Please fill all the fields' }));
    }
  }

  render() {
    return (
      <form
        id="meal-form"
        onSubmit={this.onFormSubmit}
        name="mealForm"
        encType="multipart/form-data"
        className="add-meal-form"
      >
        {this.state.error &&
          <div className="alert alert-danger">
            {this.state.error}
          </div>}

        <input
          className="form-control"
          type="text"
          name="name"
          value={this.state.meal.name}
          onChange={this.onFormInput}
          placeholder="Meal Name"
        />

        <input
          className="form-control"
          type="text"
          name="description"
          value={this.state.meal.description}
          onChange={this.onFormInput}
          placeholder="Short Description"
        />

        <input
          className="form-control"
          type="number"
          name="price"
          value={this.state.meal.price}
          onChange={this.onFormInput}
          placeholder="Price"
        />

        <input
          className="form-control"
          type="file"
          name="imageurl"
          onChange={this.onFormInput}
        />

        <div className="contain-btn">
          <input
            className="btn-control loginsubmitBtn"
            type="submit"
            value="Submit"
          />
          <input
            className="btn-control loginsubmitBtn"
            type="submit"
            value="Clear"
          />
        </div>
      </form>
    );
  }
}

MealForm.propTypes = {
  meal: PropTypes.object,
  onSubmit: PropTypes.func,
};

MealForm.defaultProps = {
  meal: undefined,
};

export default MealForm;

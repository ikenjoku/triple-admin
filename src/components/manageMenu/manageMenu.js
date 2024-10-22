import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMenu, addMeal, editMeal, deleteMeal } from '../../redux/actions/mealActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './manageMenu.css';
export class ManageMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      meal: {
        name: '',
        description: '',
        price: '',
        imageurl: '',
        category: ''
      },
      error: '',
    };
    this.formRef = null;
  }

  resetState = () => {
    this.setState({
      isEditing: false,
      meal: {
        name: '',
        description: '',
        price: '',
        imageurl: '',
        category: ''
      },
      error: '',
    });
  }

  componentDidMount() {
    this.props.fetchMenu();
  }

  scrollToForm = () => window.scrollTo(0, this.formRef.current.offsetTop)

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
    const { meal, isEditing } = this.state;
    const { name, price, description, imageurl, category } = meal;
    if (name && price && description && imageurl) {
      this.setState(() => ({ error: '' }));

      const formData = new FormData();
      formData.append('name', name);
      formData.append('price', price);
      formData.append('description', description);
      formData.append('imgurl', imageurl);
      formData.append('category', category);

      if (isEditing) {
        this.props.editMeal(formData, meal._id);
        this.resetState();
      } else {
        this.props.addMeal(formData);
        this.resetState();
      }
    } else {
      this.setState(() => ({ error: 'Please fill all the fields' }));
    }
  }

  handleEditMeal = (meal) => {
    this.setState({
      meal,
      isEditing: true,
    });
    // this.scrollToForm();
  }

  handleDeleteMeal = (mealId) => {
    this.props.deleteMeal(mealId);
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
            <FontAwesomeIcon onClick={() => this.handleEditMeal(meal)} icon="edit" className="edit-btn" />
          </span>
          <span style={{ marginLeft: '25px' }}>
            <FontAwesomeIcon onClick={() => this.handleDeleteMeal(meal._id)} icon="trash-alt" className="remove-btn" />
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
    const { isEditing, meal } = this.state;
    const { menu, isLoading } = this.props;
    const renderContent = menu.length ? (
      <div className="contain-meal-list">
        {
          menu.map(this.renderMeal)
        }
      </div>
    ) : this.renderNoContent();

    return (
      <div>
        <p className="page-title">Manage Menu</p>
        <div className="meal-form-wrapper">
          <h2 className="form-title">{ isEditing ? `Editing ${meal.name}...` : 'Add a new meal'}</h2>
          <form
            id="meal-form"
            onSubmit={this.onFormSubmit}
            name="mealForm"
            encType="multipart/form-data"
            className="add-meal-form"
            ref={node => this.formRef = node}
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

            <input
              className="form-control"
              type="text"
              name="category"
              value={this.state.meal.category}
              onChange={this.onFormInput}
              placeholder="Meal Category"
            />

            <div className="contain-btn">
              <input
                className="btn-control loginsubmitBtn"
                type="submit"
                value="Submit"
              />
              <input
                className="btn-control loginsubmitBtn"
                type="button"
                value="Clear"
                onClick={this.resetState}
              />
            </div>
          </form>
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

export default connect(mapStateToProps, { fetchMenu, addMeal, editMeal, deleteMeal })(ManageMenu);

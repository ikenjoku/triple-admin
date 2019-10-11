import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { addHighlight } from '../../redux/actions/highlightActions';
import HighlightForm from './highlightForm';
import './manageHighlights.css';

export class ManageHighlights extends Component {
  state = {
    isEditing: false,
    highlight: {
      title: '',
      details: '',
      imageurl: '',
    },
    error: '',
    meals: [
      {
        title: 'Cuisine Exposé',
        details: 'Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend.',
        imgurl: "https://res.cloudinary.com/ikeenjoku/image/upload/v1536724150/bookameal/2018-09-12T03:49:09.283ZUgwu-Archi.jpg.jpg",
      },
      {
        title: 'Cuisine Exposé',
        details: 'Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend.',
        imgurl: "https://res.cloudinary.com/ikeenjoku/image/upload/v1536724150/bookameal/2018-09-12T03:49:09.283ZUgwu-Archi.jpg.jpg",
      },
      {
        title: 'Cuisine Exposé',
        details: 'Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend.',
        imgurl: "https://res.cloudinary.com/ikeenjoku/image/upload/v1536724150/bookameal/2018-09-12T03:49:09.283ZUgwu-Archi.jpg.jpg",
      },
      {
        title: 'Cuisine Exposé',
        details: 'Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend.',
        imgurl: "https://res.cloudinary.com/ikeenjoku/image/upload/v1536724150/bookameal/2018-09-12T03:49:09.283ZUgwu-Archi.jpg.jpg",
      },
    ],
  }

  resetState = () => {
    this.setState({
      isEditing: false,
      highlight: {
        title: '',
        details: '',
        imageurl: '',
      },
      error: '',
    });
  }

  onFormInput = (event) => {
    event.preventDefault();
    const highlight = this.state.highlight;
    switch (event.target.name) {
      case 'imageurl':
        highlight.imageurl = event.target.files[0];
        break;
      default:
        highlight[event.target.name] = event.target.value;
    }
    this.setState({ highlight });
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    const { title, details, imageurl } = this.state.highlight;
    if (title && details && imageurl) {
      this.setState(() => ({ error: '' }));

      const formData = new FormData();
      formData.append('title', title);
      formData.append('details', details);
      formData.append('imgurl', imageurl);
      this.props.addHighlight(formData);
      this.resetState();
    } else {
      this.setState(() => ({ error: 'Please fill all the fields' }));
    }
  }

  renderHighlight = (highlight, index) => {
    return (
      <div key={index} className="contain-highlight">
        <div>
          <img src={highlight.imgurl} alt="highlight" className="highlight-image" />
        </div>
        <div className="contain-title-btns">
          <p><strong>{highlight.title}</strong></p>
          <div>
            <span style={{ margin: '10px' }}>
              <FontAwesomeIcon icon="edit" className="edit-btn" />
            </span>
            <span style={{ margin: '10px' }}>
              <FontAwesomeIcon icon="trash-alt" className="remove-btn" />
            </span>
          </div>
        </div>
        <div>
          {highlight.details}
        </div>
      </div>
    );
  }
  render() {
    return (
      <div>
        <p className="page-title">Manage Highlights</p>
        <div className="highlight-form-wrapper">
          <h2 className="form-title">Add a new highlight</h2>
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
              type="file"
              name="imageurl"
              onChange={this.onFormInput}
            />

            <input
              className="form-control"
              type="text"
              name="title"
              value={this.state.highlight.title}
              onChange={this.onFormInput}
              placeholder="Title"
            />

            <input
              className="form-control"
              type="text"
              name="details"
              value={this.state.highlight.details}
              onChange={this.onFormInput}
              placeholder="Details"
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
                onClick={this.resetState}
                value="Clear"
              />
            </div>
          </form>
          <hr />
        </div>
        <div className="contain-highlight-list">
          {
            this.state.meals.map(this.renderHighlight)
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ highlightReducer }) => ({
  menu: highlightReducer.menu,
  isLoading: highlightReducer.isLoading,
  error: highlightReducer.error,
});

export default connect(mapStateToProps, { addHighlight })(ManageHighlights);

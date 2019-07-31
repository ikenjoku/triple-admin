import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HighlightForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      highlight: {
        title: props.highlight ? props.highlight.name : '',
        details: props.meal ? props.highlight.description : '',
        imageurl: props.highlight ? props.highlight.imageurl : '',
      },
      error: '',
    };
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
    const { name, price, description, imageurl } = this.state.highlight;
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
            type="submit"
            value="Clear"
          />
        </div>
      </form>
    );
  }
}

HighlightForm.propTypes = {
  highlight: PropTypes.object,
  onSubmit: PropTypes.func,
};

HighlightForm.defaultProps = {
  meal: undefined,
};

export default HighlightForm;

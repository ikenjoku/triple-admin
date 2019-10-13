import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { addHighlight, fetchHighlights, editHighlight, deleteHighlight } from '../../redux/actions/highlightActions';
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

  componentDidMount () {
    this.props.fetchHighlights();
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
    const { highlight, isEditing } = this.state;
    const { title, details, imageurl } = highlight
    if (title && details && imageurl) {
      this.setState(() => ({ error: '' }));

      const formData = new FormData();
      formData.append('title', title);
      formData.append('details', details);
      formData.append('imgurl', imageurl);

      if (isEditing) {
        this.props.editHighlight(formData, highlight._id);
        this.resetState();
      } else {
        this.props.addHighlight(formData);
        this.resetState();
      }
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
              <FontAwesomeIcon onClick={() => this.handleEditHighlight(highlight)} icon="edit" className="edit-btn" />
            </span>
            <span style={{ margin: '10px' }}>
              <FontAwesomeIcon onClick={() => this.handleDeleteHighlight(highlight._id)} icon="trash-alt" className="remove-btn" />
            </span>
          </div>
        </div>
        <div>
          {highlight.details}
        </div>
      </div>
    );
  }

  handleEditHighlight = (highlight) => {
    this.setState({
      highlight,
      isEditing: true,
    });
  }

  handleDeleteHighlight = (highlightId) => {
    this.props.deleteHighlight(highlightId);
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
    const { isEditing, highlight } = this.state;
    const { highlights, isLoading } = this.props;
    const renderContent = highlights.length ? (
      <div className="contain-highlight-list">
        {
          highlights.map(this.renderHighlight)
        }
      </div>
    ) : this.renderNoContent();
    return (
      <div>
        <p className="page-title">Manage Highlights</p>
        <div className="highlight-form-wrapper">
          <h2 className="form-title">{ isEditing ? `Editing ${highlight.title}...` : 'Add a new highlight'}</h2>
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
          {
            isLoading ? this.renderLoader() : renderContent
          }
      </div>
    )
  }
}

const mapStateToProps = ({ highlightReducer }) => ({
  highlights: highlightReducer.highlights,
  isLoading: highlightReducer.isLoading,
  error: highlightReducer.error,
});

export default connect(mapStateToProps, { addHighlight, fetchHighlights, editHighlight, deleteHighlight })(ManageHighlights);

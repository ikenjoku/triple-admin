import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import HighlightForm from './highlightForm';
import './manageHighlights.css';

export class ManageHighlights extends Component {
  state = {
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

  renderHighlight = (highlight) => {
    return (
      <div className="contain-highlight">
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
          <HighlightForm />
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

export default ManageHighlights;

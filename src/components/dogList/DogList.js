import React, { Component, Fragment } from 'react';

// api
import { dogsList } from '../../api/dogs';
import { breed } from '../../api/breed';

// components
import Dog from './Dog.js';
import Popup from '../popup/Popup';

class DogList extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      imgSrc: '',
    };
    this.openPopup = this.openPopup.bind(this);
    this.closePopup = this.closePopup.bind(this);
  }

  openPopup(image) {
    this.setState({
      isOpen: true,
      imgSrc: image,
    });
  }

  closePopup() {
    this.setState({
      isOpen: false,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('previous state:', prevState);
    console.log('current state:', this.state);
  }

  render() {
    const { isOpen, imgSrc } = this.state;
    return (
      <Fragment>
      { dogsList.map (dog =>
        <Dog
          key={dog.id}
          name={dog.name}
          picture={dog.picture}
          gender={dog.gender}
          age={dog.age}
          used={dog.used}
          breedName={breed[dog.breed]}
          openPopup={this.openPopup}
        />
      )}
      { isOpen && <Popup imgSrc={imgSrc} closePopup={this.closePopup} /> }
      </Fragment>
    );
  }
}

export default DogList;

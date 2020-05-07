import React, { Component } from 'react';
import { FaArrowUp } from 'react-icons/fa';

import './scrollToTop.scss';

export default class ButtonScrollToTop extends Component {
    state = {
      isVisible: false,
    };

    componentDidMount() {
      document.addEventListener('scroll', (e) => {
        this.toggleVisibility();
      });
    }

  toggleVisibility = () => {
    if (window.pageYOffset > 1200) {
      this.setState({
        isVisible: true,
      });
    }
    else {
      this.setState({
        isVisible: false,
      });
    }
  }

  scrollToTop = () => {
    window.scrollTo({
      top: 732,
      behavior: 'smooth',
    });
  }

  render() {
    const { isVisible } = this.state;
    return (
      <div>
        {isVisible && (
        <div className="scrollToTop" onClick={this.scrollToTop}><FaArrowUp /></div>
        )}
      </div>
    );
  }
}

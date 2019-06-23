import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: ''
  };

  handleOnChange = (e) => {
    this.setState({
      text: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addReview(this.state.text,this.props.restaurant.id);
    this.setState({text:''});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleOnChange} value={this.state.text} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;

import React, { Component } from 'react';

class ReviewInput extends Component {
  state={
    text:'',
    restaurantId: ''
  }

  handleChange = event => {
    this.setState({
      text: event.target.value,
      restaurantId: this.props.restaurantId
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addReview(this.state)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.text} onChange={this.handleChange}/>
          <input type='submit' value='ADD Review'/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;

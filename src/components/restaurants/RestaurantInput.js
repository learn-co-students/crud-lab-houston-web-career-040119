import React, { Component } from 'react';

class RestaurantInput extends Component {
  state={
    text:''
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  addRestaurant = (event) => {
    event.preventDefault()
    this.props.addRestaurant(this.state.text)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addRestaurant}>
          <label>Restaurant Name:</label>
          <input type='text' value={this.state.text} onChange={this.handleChange}/>
          <input type='submit' value='ADD Restaurant'/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;

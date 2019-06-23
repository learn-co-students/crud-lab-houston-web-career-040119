import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    text: ''
  };

  handleOnChange = (e) => {
    this.setState({
      text: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addRestaurant(this.state.text);
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

export default RestaurantInput;

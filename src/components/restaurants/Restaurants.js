import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

  render() {
    const restaurantsList = this.props.restaurants.map(restaurant => <Restaurant restaurant={restaurant} key={restaurant.id} deleteRestaurant={this.props.deleteRestaurant}/>)
    return(
      <ul>
        {restaurantsList}
      </ul>
    );
  }
};

export default Restaurants;
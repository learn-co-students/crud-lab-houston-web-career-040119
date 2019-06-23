import React, { Component } from 'react'
import { connect } from 'react-redux';
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput restaurantId={this.props.restaurant.id} restaurant={this.props.restaurant} addReview={this.props.addReview} />
        <Reviews deleteReview={this.props.deleteReview} reviews={this.props.reviews} restaurant={this.props.restaurant} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.reviews
  };
}

const mapDispatchToProps = dispatch => {
  return {
    addReview: (text,restaurantId) => dispatch({type:"ADD_REVIEW",review:{text,restaurantId}}),
    deleteReview: (id) => dispatch({type:"DELETE_REVIEW",id})
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(ReviewsContainer)

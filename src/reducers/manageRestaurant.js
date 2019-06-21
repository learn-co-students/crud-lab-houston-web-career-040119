import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
    restaurants: [],
    reviews: []
}, action) {
  switch(action.type){
    case "ADD_RESTAURANT":
      let newRestaurant = {
        id: cuidFn(),
        text: action.text
      }
      return { ...state,
        restaurants: [...state.restaurants, newRestaurant]}
    case "DELETE_RESTAURANT":
      let newRestaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id)
      let newReviews = state.reviews.filter(review => review.restaurantId !== action.id)
      return {restaurants: newRestaurants, reviews: newReviews}
    case "ADD_REVIEW":
      let newReview = {
        id: cuidFn(),
        restaurantId: action.review.restaurantId,
        text: action.review.text
      }
      return { ...state,
        reviews: [...state.reviews, newReview]}
    case "DELETE_REVIEW":
      let reviews = state.reviews.filter(review => review.id !== action.id)
      return {...state, reviews}
    default:
      return state
  }
}

export const addRestaurant = restaurant => {
    return {
        type: 'ADD_RESTAURANT',
        restaurant
    }
}

export const deleteRestaurant = restaurant => {
    return {
        type: 'DELETE_RESTAURANT',
        restaurant
    }
} 
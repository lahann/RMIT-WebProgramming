import { SHOPPING_CART, FETCH_ORDERS, UPDATE_ORDER } from '../../components/Constants.jsx'

const orders = (state = [], action) => {
    switch (action.type) {
        // case UPDATE_ORDER:
        //     const updatedOrders = state.map(order => {
        //         if (order._id === action.order._id)
        //             return { ...order, ...action.order }
        //         return order
        //     })
        //     return updatedOrders

        case FETCH_ORDERS:
            return action.data
    }
    return state
}

export default orders
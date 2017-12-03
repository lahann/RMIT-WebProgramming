import { connect} from 'react-redux'
import { addCartAndReset, updateQuantity, deleteCartItem } from '../actions'
import CheckoutPage from '../components/CheckoutPage.jsx'

const mapStateToProps = state => {
    return {cartItems: state.cartItems}
}

const mapDispatchToProps = dispatch => {
    return {
        handleAddCartAndReset: cart => {
            dispatch(addCartAndReset(cart))
        },
        handleUpdateQuantity: update => {
            dispatch(updateQuantity(update))
        },
        handleDeleteCartItem: id => {
            dispatch(deleteCartItem(id))
        }
    }
}
const VisibleCheckoutPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(CheckoutPage)

export default VisibleCheckoutPage
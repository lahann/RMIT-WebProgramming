import { connect } from 'react-redux'
import { updateOrder } from '../actions'
import OrderTable from '../components/OrderTable.jsx'


const mapStateToProps = state => {
    return { orders: state.orders }
}

const mapDispatchToProps = dispatch => {
    return {
        handleOrderUpdate: update => {
            dispatch(updateOrder(update))
        }
    }
}
const VisibleOrderTable = connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderTable)

export default VisibleOrderTable
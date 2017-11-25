import { connect} from 'react-redux'
import { addProduct, updateProduct } from '../actions'
import ProductTable from '../components/ProductTable.jsx'

const mapStateToProps = state => {
    return {products: state.products}
}

const mapDispatchToProps = dispatch => {
    return {
        handleAddProduct: product => {
            dispatch(addProduct(product))
        },
        handleUpdateProduct: update => {
            dispatch(updateProduct(update))
        }
    }
}

const VisibleProductTable = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductTable)

export default VisibleProductTable
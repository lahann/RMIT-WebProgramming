import { connect} from 'react-redux'
import { addProduct, updateProduct, deleteProduct } from '../actions'
import ProductTable from '../components/ProductTable.jsx'

const mapStateToProps = state => {
    return {products: state.products, productTypes: state.productTypes}
}

const mapDispatchToProps = dispatch => {
    return {
        handleAddProduct: product => {
            dispatch(addProduct(product))
        },
        handleUpdateProduct: update => {
            dispatch(updateProduct(update))
        },
        handleDeleteProduct: id => {
            dispatch(deleteProduct(id))
        }
    }
}

const VisibleProductTable = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductTable)

export default VisibleProductTable
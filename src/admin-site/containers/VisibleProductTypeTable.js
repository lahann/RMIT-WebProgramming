import { connect} from 'react-redux'
import { addProduct, updateProduct, deleteProduct, addProductType, updateProductType, deleteProductType } from '../actions'
import ProductTypeTable from '../components/ProductTypeTable.jsx'


const mapStateToProps = state => {
    return {productTypes: state.productTypes}
}

const mapDispatchToProps = dispatch => {
    return {
        handleAddProductType: productType => {
            dispatch(addProductType(productType))
        },
        handleUpdateProductType: update => {
            dispatch(updateProductType(update))
        },
        handleDeleteProductType: id => {
            dispatch(deleteProductType(id))
        }
    }
}
const VisibleProductTypeTable = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductTypeTable)

export default VisibleProductTypeTable
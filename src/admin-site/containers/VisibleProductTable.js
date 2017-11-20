import { connect} from 'react-redux'
import ProductTable from '../components/ProductTable'


const mapStateToProps = state => {
    return {products: state.products}
}

const VisibleProductTable = connect(mapStateToProps)(ProductTable)

export default VisibleProductTable
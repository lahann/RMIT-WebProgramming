import React from 'react'
import { connect } from 'react-redux'
import Footer from '../components/footer.jsx'
import Header from '../components/header.jsx'
import ProductPage from './ProductPage.jsx'
import CategoriePage from './CategoriePage.jsx'
import { Table, th, tr, thead, td, tbody } from 'react-bootstrap'

class App extends React.Component {

  getData() {
    return {
      id: '0',
      name: 'First Product',
      price: '100',
      description: 'Random thoughts',
      brand: 'Cool Brand',
      producer: 'Cool Producer',
      imageURL: 'www.google.com/image0.jpg'
    }
  }

  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div>Clearly an awesome start</div>
        <div>
          <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </div>

        <div>
          <br /><br /><br /><br /><br />

          <ProductPage products={this.props.products} />

          <br /><br /><br /><br /><br />

          <CategoriePage categories={this.props.categories} />

          <br /><br /><br /><br /><br />
        </div>

        <div>
          <Footer />
        </div>
      </div>
    )
  }
}
function mapStateToProps(centralState) {
  return {
    products: centralState.products,
    categories: centralState.categories,
    shoppingCart: centralState.shoppingCart
  }
}
export default connect(mapStateToProps)(App)

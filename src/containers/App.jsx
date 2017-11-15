import React from 'react'
import Footer from '../components/footer.jsx'
import Header from '../components/header.jsx'
import Product from '../components/Product.jsx'
import { Table, th, tr, thead, td, tbody } from 'react-bootstrap'

export default class App extends React.Component {


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
          <Product data={this.getData()} />
          <br /><br /><br /><br /><br />
        </div>

        <div>
          <Footer />
        </div>
      </div>
    )
  }
}

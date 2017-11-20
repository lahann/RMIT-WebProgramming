import React from 'react'
import { Table, Button, ButtonToolbar } from 'react-bootstrap' 

const ProductRow = ({id, name, price, description, brand, producer, imageUrl}) => (
    <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{price}</td>
        <td>{description}</td>
        <td>{brand}</td>
        <td>{producer}</td>
        <td>{imageUrl}</td>
        <td>
        {
         <ButtonToolbar>
             <Button>EDIT</Button>
             <Button bsStyle="danger">DELETE</Button>
         </ButtonToolbar>

        }
        </td>
    </tr>
)

export default ProductRow


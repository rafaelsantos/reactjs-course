import React from 'react'
import products from '../../data/products'
import './Products.css'

export default (props) => {
    function getLines() {
        return products.map((product, key) => {
            return (
                <tr key={ product.id } className={ key % 2 == 0 ? 'Odd' : '' }>
                    <td>{ product.id }</td>
                    <td>{ product.name }</td>
                    <td>$ { product.price.toFixed(2) }</td>
                </tr>
            )
        })
    }
    return (
        <div className="Products">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    { getLines() }
                </tbody>
            </table>
        </div>
    )
}
import React from 'react'

export const Product = ({products, loading}) => {

    if(loading){
        return <h2>Loading products...</h2>
    }
  return (
    <div>
        {products.map(product => (
            <div key={product.id} className="list-group-item">
                {product.title}
            </div>
        ))}
    </div>
  )
}

export default Product;

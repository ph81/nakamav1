import React from 'react'
import dataProducts from '../mocks/en-us/featured-products.json'
import '../styles/FeaturedProducts.css'

const FeaturedProducts = () => {

    const featuredList = dataProducts.results;

    return (
        <section id="collection">
            <h2>New collection</h2>
               <div className="product__container">
               {featuredList.map(product => 
                   <div className="product__item" key={product.id}>
                       <img src={product.data.mainimage.url} alt={product.data.name} />
                       <p>{product.data.name}</p>
                       <p>$ {product.data.price}</p>
                   </div>    
                
            
            )}
            
        </div>
        </section>
        
    )
}

export default FeaturedProducts;
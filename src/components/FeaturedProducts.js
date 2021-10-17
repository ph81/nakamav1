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
                   
                      <div className="product__image">
                        <img src={product.data.mainimage.url} alt={product.data.name} className="Image" />
                      </div>
                      <div className="product__title">{product.data.name}</div>
                      <div className="product__price">$ {product.data.price}</div>
                    
                  </div>
            )}
            
        </div>
        </section>
        
    )
}

export default FeaturedProducts;
import React from 'react'
import data from '../mocks/es-mx/products.json'
import dataFilter from '../mocks/es-mx/product-categories.json';
import styles from '../styles/ProductList.module.css'




const ProductList = () => {

    const productList = data.results;
    const categories = dataFilter.results;

    return (
      <section id="filterbycategory">
        <div className={styles["filter__container"]}>
        {categories.map(category => 
            <div className={styles["filter__item"]} key={category.id}>
                <p>{category.data.name}</p>
            </div>    
      )}
      
        </div>
   
        <div className={styles["list__container"]}>
        {productList
           .filter(product => product.data.category.id === 'YWHv7xIAACwAyjW6')
           .map(product => 
              <div className={styles["list__item"]} key={product.id}>
                  
          <div className={styles["list__image"]}>
            <img src={product.data.mainimage.url} alt={product.data.name}  />
          </div>
          <div className={styles["list__title"]}>{product.data.name}</div>
          <div className={styles["list__title"]}>{product.data.category.slug}</div>
          <div className={styles["list__price"]}>$ {product.data.price}</div>
                   
               </div>
           )}
       </div>
    </section>  
    )
}

export default ProductList;
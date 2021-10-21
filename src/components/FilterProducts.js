import React from 'react';
import dataFilter from '../mocks/es-mx/product-categories.json';
import  styles from '../styles/FilterProducts.module.css'

const FilterProducts = () => {
    const categories = dataFilter.results;

    return (
        <div className={styles["filter__container"]}>
        {categories.map(category => 
            <div className={styles["filter__item"]} key={category.id}>
                <p>{category.data.name}</p>
            </div>    
         
     
     )}
     
 </div>
    )
}

export default FilterProducts;
import React from 'react';

const Price = ({ salePrice, originalPrice}) => {
  return (
           <div className="book__price">
            {book.salePrice ? (
                <>
                <span className="book__price--normal">
                    ${book.originalPrice.toFixed(2)}                    
                </span>
                  ${book.salePrice.toFixed(2)}   
              </>
            ) : ( 
              <>${book.originalPrice.toFixed(2)}</>
            )}
       </div>
  );

};

export default Price;







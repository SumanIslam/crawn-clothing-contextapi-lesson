import React, { useContext } from 'react';

// component import
import CustomButton from '../custom-button/custom-button.component';

// styles
import './collection-item.styles.scss';

// context
import { CartContext } from '../../provider/cart.provider';

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;
  const { addItem } = useContext(CartContext);

  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};


export default CollectionItem;

import React, { useContext } from 'react';

import CollectionPreview from '../collection-preview/collection-preview.component';

import './collections-overview.styles.scss';

import { CollectionContext } from '../../contexts/collection/collection.context';

const CollectionsOverview = () => {
  const { collectionsForPreview } = useContext(CollectionContext);
  return (
    <div className='collections-overview'>
      {collectionsForPreview.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
}


export default CollectionsOverview;

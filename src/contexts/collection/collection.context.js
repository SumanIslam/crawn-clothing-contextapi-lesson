import React, { createContext } from "react";
import SHOP_DATA from "./shop.data";


export const CollectionContext = createContext({
  collections: SHOP_DATA,
  collectionsForPreview: []
});

const CollectionProvider = ({ children }) => {
  const collections = SHOP_DATA;
  const collectionsForPreview = collections ? Object.keys(collections).map((key) => collections[key]) : [];

  return (
    <CollectionContext.Provider value={{collections, collectionsForPreview}}>
      {children}
    </CollectionContext.Provider>
  )
}

export default CollectionProvider;
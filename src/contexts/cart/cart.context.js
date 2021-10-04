import { createContext } from "react";

const cartContext = createContext({
  hidden: false,
  toggleHidden: () => {}
});

export default cartContext;
import { createContext } from "react";

import INITIAL_STATE from "./directory.data";

export const directoryContext = createContext(INITIAL_STATE.sections);

import React, { createContext, useState } from "react";

export const BoardContext = createContext({});

export function BoardContextProvider({ children }) {
  const [openCard, setOpenCard] = useState(null);
  return (
    <BoardContext.Provider value={{
      openCard, setOpenCard,
    }}>
      {children}
    </BoardContext.Provider>
  );
}

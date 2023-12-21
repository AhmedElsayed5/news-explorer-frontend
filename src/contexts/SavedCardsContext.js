import React from "react";

const SavedCardsContext = React.createContext({
  savedCardsState: [],
  setSavedCardsState: () => {},
});

export { SavedCardsContext };

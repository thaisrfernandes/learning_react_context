import React from "react";
import BookContextProvider from "./contexts/BookContext";

export const App = () => {
  return (
    <div className="App">
      <BookContextProvider>
        
      </BookContextProvider>
    </div>
  );
};

export default App;

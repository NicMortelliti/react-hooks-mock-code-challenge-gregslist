import React, {useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  // App is common parent component for Search and Listing Container
  const [searchTermState, setSearchTermState] = useState("")

  function updateSearchTerm(term) {
    setSearchTermState(term)
  }

  return (
    <div className="app">
      <Header updateSearchTerm={updateSearchTerm} />
      <ListingsContainer searchTerm={searchTermState}/>
    </div>
  );
}

export default App;

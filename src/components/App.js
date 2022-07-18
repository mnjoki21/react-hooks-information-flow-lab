import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header"
import itemData from "../data/items";

  function App() {
    const [items,setItems ] = useState(itemData);
    const [isDarkMode , setIsDarkMode ] = useState (false);

    function handleDarkModeClick (){
      setIsDarkMode((isDarkMode) => !isDarkMode)
    }

    return (
      <div className= {"App" + (isDarkMode ? "dark" : "light")}>
        <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} >

          <h2>Shopster</h2>

        <button onClick = {handleDarkModeClick}>{isDarkMode ? "Dark " : "light"} Mode</button>
       </Header>
         <ShoppingList items = {itemData}/>
         <Filter  />

    
      </div>
    )

}

export default App;

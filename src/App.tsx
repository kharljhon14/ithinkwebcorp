import React from "react";
import Header from "./layouts/header/Header";
import Main from "./layouts/Main";
import "./sass/main.scss";
const App = () => {
   return (
      <div className="app">
         <Header />
         <Main />
      </div>
   );
};

export default App;

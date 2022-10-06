import React, { useState } from "react";
import Home from "../pages/Home";
import UsersComponent from "../pages/Users";

const Main = () => {
   const [users, setUsers] = useState([]);

   return (
      <div className="main">
         {/* <Home /> */}
         <UsersComponent />
      </div>
   );
};

export default Main;

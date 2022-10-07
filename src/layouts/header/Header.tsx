import React from "react";

const Header = () => {
   return (
      <nav className="nav">
         <div className="nav__container">
            <h1 className="nav__logo header-1">
               <a href="/">Ithinkweb</a>
            </h1>
            <ul className="nav__list">
               <li className="nav__list-item">
                  <a href="/">Home</a>
                  <a href="/users">Users </a>
               </li>
            </ul>
         </div>
      </nav>
   );
};

export default Header;

import { useState } from "react";
import ToastNotification from "../components/ToastNofitication";
import Home from "../pages/Home";
import UsersComponent from "../pages/Users";

const Main = () => {
   const [toast, setToast] = useState<string>("");

   const handleToasts = (message: string) => {
      setToast(message);

      setTimeout(() => {
         setToast("");
      }, 5000);
   };

   const showHome = () => {
      if (window.location.pathname === "/") return <Home />;
   };

   const showUsersComponent = () => {
      if (window.location.pathname === "/users") return <UsersComponent onShowToast={handleToasts} />;
   };

   return (
      <div className="main">
         {showHome()}
         {showUsersComponent()}
         <ToastNotification toast={toast} />
      </div>
   );
};

export default Main;

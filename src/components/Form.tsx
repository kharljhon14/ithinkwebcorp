import { useEffect, useRef } from "react";
import User from "../models/user";

interface props {
   onIsFormOpen: () => void;
   onAddingNew: (user: User) => void;
   onUpdateUser: (user: User) => void;
   selectedUser?: User;
}

const Form = ({ onIsFormOpen, onAddingNew, onUpdateUser, selectedUser }: props) => {
   const firstNameInput = useRef<HTMLInputElement>(null);
   const lastNameInput = useRef<HTMLInputElement>(null);
   const emailInput = useRef<HTMLInputElement>(null);

   useEffect(() => {
      if (selectedUser !== undefined && firstNameInput.current !== null) firstNameInput.current.value = selectedUser.first_name;
      if (selectedUser !== undefined && lastNameInput.current !== null) lastNameInput.current.value = selectedUser.last_name;
      if (selectedUser !== undefined && emailInput.current !== null) emailInput.current.value = selectedUser.email;
   }, []);

   const handleSubmit = (evt: React.FormEvent) => {
      evt.preventDefault();

      if (selectedUser) {
         onUpdateUser(selectedUser);
      }

      if (!selectedUser && firstNameInput.current !== null && lastNameInput.current !== null && emailInput.current !== null) {
         const newUser = { id: Date.now(), first_name: firstNameInput.current.value, last_name: lastNameInput.current.value, email: emailInput.current.value, avatar: "" };
         onAddingNew(newUser);
      }
   };

   return (
      <div className="form__container">
         <form onSubmit={handleSubmit} className="form">
            <h2 className="form__header header-2">{selectedUser ? "Update User" : "Create User"}</h2>
            <input ref={firstNameInput} name="firstname" required type="text" className="form__input" placeholder="First name..." />
            <input ref={lastNameInput} name="lastname" required type="text" className="form__input" placeholder="Last name..." />
            <input ref={emailInput} name="email" required type="email" className="form__input" placeholder="Email" />
            <input name="avatar" id="avatar" type="file" className="form__input" />
            <div className="form__buttons">
               <button className="btn form__btn btn-dark" type="submit">
                  {selectedUser ? "Update" : "Submit"}
               </button>
               <button onClick={onIsFormOpen} className="btn form__btn" type="button">
                  Cancel
               </button>
            </div>
         </form>
      </div>
   );
};

export default Form;

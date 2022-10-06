import React from "react";
import Page from "../models/page";
import User from "../models/user";

interface props {
   users: Array<User>;
   pages: Page;
   getDataFromApi: (path: string) => void;
   loading: boolean;
}

const Table = ({ users, pages, getDataFromApi, loading }: props) => {
   const pageNumber: Array<number> = [];

   for (let i = 1; i <= pages.total_pages; i++) {
      pageNumber.push(i);
   }

   const renderPageNumber = pageNumber.map((number) => {
      return (
         <li key={number}>
            <a onClick={() => getDataFromApi(`https://reqres.in/api/users?page=${number}&per_page=10`)} href="!#">
               {number}
            </a>
         </li>
      );
   });

   const renderUsers = users.map((user) => {
      return (
         <tr key={user.id} className="table__body-row">
            <td className="table__body-data">{user.id}</td>
            <td className="table__body-data">
               <img src={user.avatar} alt="user avatar" />
            </td>
            <td className="table__body-data">{user.email}</td>
            <td className="table__body-data">{user.first_name}</td>
            <td className="table__body-data">{user.last_name}</td>
            <td className="table__body-data">
               <button className="btn">Edit</button>
               <button className="btn btn-dark">Delete</button>
            </td>
         </tr>
      );
   });

   return (
      <table className="table">
         <thead className="table__head">
            <tr className="table__head-row">
               <th className="table__head-title">ID</th>
               <th className="table__head-title">Avatar</th>
               <th className="table__head-title">Email</th>
               <th className="table__head-title">First Name</th>
               <th className="table__head-title">Last Name</th>
               <th className="table__head-title">Edit / Delete</th>
            </tr>
         </thead>
         <tbody className="table__body">{renderUsers}</tbody>

         <tfoot className="table__foot">
            <tr className="table__foot-row">
               <td className="table__foot-data">
                  <ul>{renderPageNumber}</ul>
               </td>
            </tr>
         </tfoot>
      </table>
   );
};

export default Table;

import { useEffect, useState } from "react";
import Details from "../components/Details";
import Form from "../components/Form";
import Loader from "../components/Loader";
import Table from "../components/Table";
import { addUser, deleteUser, fetchUsers, updateUser } from "../helpers";
import Page from "../models/page";
import User from "../models/user";

interface props {
   onShowToast: (message: string) => void;
}

const UsersComponent = ({ onShowToast }: props) => {
   const [pages, setPages] = useState<Page>({ page: 1, per_page: 10, total: 0, total_pages: 0 });
   const [users, setUsers] = useState<Array<User>>([]);
   const [loading, setLoading] = useState<boolean>(true);
   const [selectedUser, setSelectedUser] = useState<User>();
   const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
   const [isDetailsOpen, setIsDetailsOpen] = useState<boolean>(false);

   const getDataFromApi = async (path: string) => {
      setLoading(true);
      const response = await fetchUsers(path);

      setPages({
         page: response.page,
         per_page: response.per_page,
         total: response.total,
         total_pages: response.total_pages,
      });

      setUsers(response.data);
      setLoading(false);
   };

   const handleAdd = async (user: User) => {
      setLoading(true);
      await addUser("https://reqres.in/api/users/", user);

      await getDataFromApi(`https://reqres.in/api/users?page=${pages.page}&per_page=10`);
      setLoading(false);
      onShowToast("Added Successfully");

      handleIsFormOpen();
   };

   const handleDelete = async (id: number) => {
      setLoading(true);
      await deleteUser(`https://reqres.in/api/users/${id}`);

      setSelectedUser(undefined);
      handleIsDetailsOpen();

      setLoading(false);
      onShowToast("Deleted Successfully");
   };

   const handleUpdate = async (user: User) => {
      setLoading(true);

      await updateUser(`https://reqres.in/api/users/${user.id}`);
      setSelectedUser(undefined);

      setLoading(false);
      handleIsFormOpen();
      onShowToast("Updated Successfully");
   };

   const handleSelectedUser = (user?: User) => {
      if (user) setSelectedUser(user);
      else setSelectedUser(undefined);
   };

   const handleIsFormOpen = () => {
      setIsFormOpen(!isFormOpen);
   };

   const handleIsDetailsOpen = () => {
      setIsDetailsOpen(!isDetailsOpen);
   };

   useEffect(() => {
      getDataFromApi(`https://reqres.in/api/users?page=${pages.page}&per_page=10`);
   }, []);

   return (
      <div className="users">
         {loading ? (
            <Loader />
         ) : (
            <div className="users__container">
               {isDetailsOpen && selectedUser ? <Details user={selectedUser} onDelete={handleDelete} onIsDetailsOpen={handleIsDetailsOpen} /> : null}
               {isFormOpen ? <Form onIsFormOpen={handleIsFormOpen} onAddingNew={handleAdd} onUpdateUser={handleUpdate} selectedUser={selectedUser} /> : null}
               <Table users={users} pages={pages} getDataFromApi={getDataFromApi} onSelectUser={handleSelectedUser} onIsFormOpen={handleIsFormOpen} onIsDetailsOpen={handleIsDetailsOpen} />
            </div>
         )}
      </div>
   );
};

export default UsersComponent;

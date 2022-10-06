import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Table from "../components/Table";
import { fetchUsers } from "../helpers";
import Page from "../models/page";
import User from "../models/user";

const UsersComponent = () => {
   const [pages, setPages] = useState<Page>({ page: 1, per_page: 10, total: 0, total_pages: 0 });
   const [users, setUsers] = useState<Array<User>>([]);
   const [loading, setLoading] = useState<boolean>(true);

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

   useEffect(() => {
      getDataFromApi(`https://reqres.in/api/users?page=${pages.page}&per_page=10`);
   }, []);

   return <div className="users">{loading ? <Loader /> : <Table users={users} pages={pages} getDataFromApi={getDataFromApi} loading={loading} />}</div>;
};

export default UsersComponent;

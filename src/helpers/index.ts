import User from "../models/user";

export const fetchUsers = async (path: RequestInfo) => {
   try {
      const response = await fetch(path, { method: "GET" });

      return await response.json();
   } catch (err) {
      console.log(err);
   }
};

export const addUser = async (path: RequestInfo, data?: User) => {
   try {
      const response = await fetch(path, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      return await response.json();
   } catch (err) {
      console.log(err);
   }
};

export const updateUser = async (path: RequestInfo, data?: User) => {
   try {
      const response = await fetch(path, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      return await response.json();
   } catch (err) {
      console.log(err);
   }
};

export const deleteUser = async (path: RequestInfo) => {
   try {
      const response = await fetch(path, { method: "DELETE" });

      return await response.text();
   } catch (err) {
      console.log(err);
   }
};

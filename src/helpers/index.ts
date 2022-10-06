export const fetchUsers = async (path: RequestInfo) => {
   const response = await fetch(path, { method: "GET", credentials: "same-origin", headers: { "Content-Type": "application/json" } });

   return await response.json();
};

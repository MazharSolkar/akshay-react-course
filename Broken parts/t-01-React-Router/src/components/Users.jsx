import { Outlet } from 'react-router-dom';

const Users = () => {
  return (
    <div>
      <h1>Users page</h1>

      <Outlet />
    </div>
  );
};
export default Users;

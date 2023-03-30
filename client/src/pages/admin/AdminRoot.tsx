import { Navigate, Outlet } from 'react-router-dom';
import Navbar from '../../components/base/navbar';

function AdminRoot(): JSX.Element {
  const auth = true;
  return (
    <>
      <Navbar />
      {auth ? <Outlet /> : <Navigate to={'../'} />}
    </>
  );
}

export default AdminRoot;

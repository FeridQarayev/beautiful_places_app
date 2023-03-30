import { Outlet } from 'react-router-dom';
import Navbar from '../../components/base/navbar';

function BaseRoot(): JSX.Element {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default BaseRoot;

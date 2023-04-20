import AdminRoot from '../pages/admin/AdminRoot';
import HomeAdmin from '../pages/admin/home';
import BaseRoot from '../pages/base/BaseRoot';
import Home from '../pages/base/home';
import Tours from '../pages/base/tours';
import WishList from '../pages/base/wishlist';
import Login from '../pages/login';
import Register from '../pages/register';

export const ROUTES = [
  {
    path: '/',
    element: <BaseRoot />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'tours',
        element: <Tours />,
      },
      {
        path: 'wishlist',
        element: <WishList />,
      },
    ],
  },
  {
    path: '/admin/',
    element: <AdminRoot />,
    children: [
      {
        path: '',
        element: <HomeAdmin />,
      },
      {
        path: 'home',
        element: <HomeAdmin />,
      },
    ],
  },
  { path: '/register', element: <Register /> },
  { path: '/login', element: <Login /> },
];

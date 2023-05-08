import Wishlist from '../components/base/wishlist';
import AdminRoot from '../pages/admin/AdminRoot';
import HomeAdmin from '../pages/admin/home';
import About from '../pages/base/about';
import BaseRoot from '../pages/base/BaseRoot';
import Home from '../pages/base/home';
import Tours from '../pages/base/tours';
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
        path: 'about',
        element: <About />,
      },
      {
        path: 'wishlist',
        element: <Wishlist />,
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

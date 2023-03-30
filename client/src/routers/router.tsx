import AdminRoot from '../pages/admin/AdminRoot';
import HomeAdmin from '../pages/admin/home';
import BaseRoot from '../pages/base/BaseRoot';
import Home from '../pages/base/home';
import Tours from '../pages/base/tours';

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
];

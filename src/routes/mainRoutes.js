import React from 'react';
import { Redirect } from 'react-router-dom';

const mainRouteConfig = [
  {
    path: '/app',
    component: () => <Redirect to='/app/orders'/>,
    exact:true,
  },
  {
    key:'orders',
    path: '/app/orders',
    component: () => <p>Orders Page</p>,
    message: 'Incoming Orders',
    icon: 'history',
    requirePermission:['staff', 'manager'],
    exact: true,
  },
  {
    key:'menu',
    path: '/app/manage-menu',
    component: () => <p>Manage Menu</p>,
    message: 'Manage Menu',
    icon: 'bread-slice',
    requirePermission:['manager'],
    exact: true,
  },
  {
    key:'highlights',
    path: '/app/manage-highlights',
    component: () => <p>Manage Highlights</p>,
    message: 'Manage Highlights',
    icon: 'newspaper',
    requirePermission:['manager'],
    exact: true,
  },
  {
    key:'admin',
    path: '/app/manage-admin',
    component: () => <p>Manage Admins</p>,
    message: 'Manage Admin',
    icon: 'headset',
    requirePermission:['manager'],
    exact: true,
  },
]

export { mainRouteConfig };

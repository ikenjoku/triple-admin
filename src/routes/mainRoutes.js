import React from 'react';
import { Redirect } from 'react-router-dom';

import ManageAdmin from '../components/manageAdmin/manageAdmin';
import ManageMenu from '../components/manageMenu/manageMenu';

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
    component: ManageMenu,
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
    component: ManageAdmin,
    message: 'Manage Admin',
    icon: 'headset',
    requirePermission:['manager'],
    exact: true,
  },
  {
    key:'dashboard',
    path: '/app/dashboard',
    component: () => <p>Dashboard - todays stats and all time</p>,
    message: 'Dashboard',
    icon: 'chart-bar',
    requirePermission:['manager'],
    exact: true,
  },
]

export { mainRouteConfig };

import React from 'react';
import { Redirect } from 'react-router-dom';

import ManageAdmin from '../components/manageAdmin/manageAdmin';
import Report from '../components/report/report';
import ManageMenu from '../components/manageMenu/manageMenu';
import ManageHighlights from '../components/manageHighlights/manageHighlights';
import IncomingOrders from '../components/incomingOrders/incomingOrders';

const staffRouteConfig = [
  {
    path: '/app',
    component: () => <Redirect to='/app/orders'/>,
    exact:true,
  },
  {
    key:'orders',
    path: '/app/orders',
    component: IncomingOrders,
    message: 'Incoming Orders',
    icon: 'history',
    requirePermission:['staff', 'manager'],
    exact: true,
  },
];

const managerRouteConfig = [
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
    component: ManageHighlights,
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
    key:'reports',
    path: '/app/reports',
    component: Report,
    message: 'Reports',
    icon: 'chart-bar',
    requirePermission:['manager'],
    exact: true,
  },
];

export { staffRouteConfig, managerRouteConfig };

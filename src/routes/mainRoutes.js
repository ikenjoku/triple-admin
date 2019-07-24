import MainPage from '../components/resetPassword';
import LoginPage from '../components/login';


const mainRouteConfig = [
  {
    key:'dashboard',
    path: '/app/dashboard',
    component: MainPage,
    message: 'Dashboard',
    icon: 'chart-bar',
    requirePermission:'dashboard'
  },
  {
    key:'file',
    path: '/app/manager',
    component: LoginPage,
    message: 'Files',
    icon: 'folder',
    requirePermission:'files'
  }
]

export { mainRouteConfig };

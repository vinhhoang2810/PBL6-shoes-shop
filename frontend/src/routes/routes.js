import config from '~/config';
// layouts
import AdminDefaultLayout from '~/layouts/AdminDefaultLayout/AdminDefaultLayout';
// pages
import DashboardPage from '~/pages/DashboardPage';
import LoginPage from '~/pages/LoginPage';

// public routers
const publicRoutes = [
    { path: config.roures.login, component: LoginPage },
    { path: config.roures.dashboard, component: DashboardPage, layout: AdminDefaultLayout },
];
//  private routers

const privateRoutes = [];

export { publicRoutes, privateRoutes };

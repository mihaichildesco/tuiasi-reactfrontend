import FuseUtils from '@fuse/utils';
import FuseLoading from '@fuse/core/FuseLoading';
import {Navigate} from 'react-router-dom';
import settingsConfig from 'app/configs/settingsConfig';
import SignInConfig from '../main/sign-in/SignInConfig';
import SignUpConfig from '../main/sign-up/SignUpConfig';
import SignOutConfig from '../main/sign-out/SignOutConfig';
import dashboardsConfigs from '../main/dashboards/dashboardsConfigs';
import appsConfigs from '../main/apps/appsConfigs';
import pagesConfigs from '../main/pages/pagesConfigs';
import authRoleExamplesConfigs from '../main/auth/authRoleExamplesConfigs';
import homepageConfig from '../main/front/homepage/homepageConfig'

const routeConfigs = [
    ...appsConfigs,
    ...dashboardsConfigs,
    ...pagesConfigs,
    ...authRoleExamplesConfigs,
    SignOutConfig,
    SignInConfig,
    SignUpConfig,
    homepageConfig,
];

const routes = [
    ...FuseUtils.generateRoutesFromConfigs(routeConfigs, settingsConfig.defaultAuth),
    {
        path: '/',
        element: <Navigate to="homepage"/>,
        auth: settingsConfig.defaultAuth,
    },
    {
        path: 'loading',
        element: <FuseLoading/>,
    },
    {
        path: '*',
        element: <Navigate to="pages/error/404"/>,
    },
];

export default routes;

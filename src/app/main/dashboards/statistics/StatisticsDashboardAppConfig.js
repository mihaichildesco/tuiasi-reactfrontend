import {lazy} from 'react';
import i18next from "i18next";
import en from './i18n/en';
import ro from './i18n/ro';

const StatisticsDashboardApp = lazy(() => import('./StatisticsDashboardApp'));

i18next.addResourceBundle('en', 'StatisticsDashboardApp', en);
i18next.addResourceBundle('ro', 'StatisticsDashboardApp', ro);

const StatisticsDashboardAppConfig = {
    settings: {
        layout: {
            config: {},
        },
    },
    routes: [
        {
            path: 'dashboards/statistics',
            element: <StatisticsDashboardApp/>,
        },
    ],
};

export default StatisticsDashboardAppConfig;

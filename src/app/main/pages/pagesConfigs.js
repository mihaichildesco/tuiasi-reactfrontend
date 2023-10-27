import maintenancePageConfig from './maintenance/maintenancePageConfig';
import activitiesPageConfig from './activities/activitiesPageConfig';
import authenticationPagesConfig from './authentication/authenticationPagesConfig';
import comingSoonPagesConfig from './coming-soon/comingSoonPagesConfig';
import invoicePagesConfig from './invoice/invoicePagesConfig';
import errorPagesConfig from './error/errorPagesConfig';
import profilePagesConfig from './profile/profilePagesConfig';

const pagesConfigs = [
    ...authenticationPagesConfig,
    comingSoonPagesConfig,
    errorPagesConfig,
    maintenancePageConfig,
    invoicePagesConfig,
    activitiesPageConfig,
    profilePagesConfig,
];

export default pagesConfigs;

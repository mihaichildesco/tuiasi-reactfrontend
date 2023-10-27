import i18next from "i18next";
import en from './i18n/en';
import ro from './i18n/ro';

import ProfileViewPage from './ProfileViewPage';
import ProfileEditPage from './ProfileEditPage';

i18next.addResourceBundle('en', 'ProfilePage', en);
i18next.addResourceBundle('ro', 'ProfilePage', ro);


const profilePagesConfig = {
    settings: {
        layout: {
            config: {},
        },
    },
    routes: [
        {
            path: 'profile',
            children: [
                {
                    path: '',
                    element: <ProfileViewPage/>,
                },
                {
                    path: 'edit',
                    element: <ProfileEditPage/>,
                },
            ],
        },
    ],
};

export default profilePagesConfig

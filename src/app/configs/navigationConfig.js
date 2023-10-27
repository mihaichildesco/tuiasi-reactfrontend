import i18next from 'i18next';

import en from './navigation-i18n/en';
import ro from './navigation-i18n/ro';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('ro', 'navigation', ro);

const navigationConfig = [
    {
        id: 'dashboards',
        title: 'Dashboards',
        type: 'group',
        icon: 'heroicons-outline:home',
        translate: 'DASHBOARDS',
        children: [
            {
                id: 'dashboards.project',
                title: 'Statistics',
                type: 'item',
                icon: 'heroicons-outline:clipboard-check',
                translate: 'STATISTICS',
                url: '/dashboards/statistics',
            },
            // {
            //   id: 'dashboards.project',
            //   title: 'Project',
            //   type: 'item',
            //   icon: 'heroicons-outline:clipboard-check',
            //   url: '/dashboards/project',
            // },
        ],
    },
    {
        id: 'general',
        title: 'General',
        type: 'group',
        icon: 'heroicons-outline:cube',
        translate: 'GENERAL',
        children: [
            {
                id: 'pages.articles',
                title: 'Articles',
                type: 'item',
                icon: 'material-solid:article',
                url: '/pages/articles',
                translate: 'ARTICLES',
            },
            {
                id: 'pages.events',
                title: 'Events',
                type: 'item',
                icon: 'material-solid:event_note',
                url: '/pages/events',
                translate: 'EVENT',
            },
            {
                id: 'pages.news',
                title: 'News',
                type: 'item',
                icon: 'heroicons-outline:newspaper',
                url: '/pages/news',
                translate: 'NEWS',
            },
            {
                id: 'pages.file_manager',
                title: 'File Manager',
                type: 'item',
                icon: 'heroicons-solid:folder',
                url: '/pages/file_manager',
                translate: 'FILE_MANAGER',
            },
        ],
    },
    {
        id: 'organization',
        title: 'Organization',
        type: 'group',
        icon: 'heroicons-outline:cube',
        translate: 'ORGANIZATION',
        children: [
            {
                id: 'pages.centers',
                title: 'Centers',
                type: 'item',
                icon: 'material-solid:article',
                url: '/pages/articles',
                translate: 'CENTERS',
            },
            {
                id: 'pages.projects',
                title: 'Events',
                type: 'item',
                icon: 'heroicons-solid:table',
                url: '/pages/projects',
                translate: 'PROJECTS',
            },
            {
                id: 'pages.members',
                title: 'Members',
                type: 'item',
                icon: 'heroicons-solid:users',
                url: '/pages/members',
                translate: 'MEMBERS',
            },
            {
                id: 'pages.teams',
                title: 'Teams',
                type: 'item',
                icon: 'heroicons-solid:user-group',
                url: '/pages/teams',
                translate: 'TEAMS',
            },
            {
                id: 'pages.partners',
                title: 'Partners',
                type: 'item',
                icon: 'heroicons-solid:globe-alt',
                url: '/pages/partners',
                translate: 'PARTNERS',
            },
        ],
    },
    {
        id: 'classifications',
        title: 'Classifications',
        type: 'group',
        icon: 'heroicons-outline:cube',
        translate: 'CLASSIFICATION',
        children: [
            {
                id: 'pages.research_fields',
                title: 'Research Fields',
                type: 'item',
                icon: 'heroicons-solid:beaker',
                url: '/pages/research_fields',
                translate: 'RESEARCH_FIELDS',
            },
            {
                id: 'pages.topics',
                title: 'Topics',
                type: 'item',
                icon: 'heroicons-solid:chat-alt-2',
                url: '/pages/topics',
                translate: 'TOPICS',
            },
            {
                id: 'pages.types',
                title: 'Types',
                type: 'item',
                icon: 'heroicons-solid:document-text',
                url: '/pages/types',
                translate: 'TYPES',
            },
        ],
    },
];

export default navigationConfig;

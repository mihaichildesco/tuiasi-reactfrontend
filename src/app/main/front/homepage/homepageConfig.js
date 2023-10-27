/* eslint-disable prettier/prettier */
import { lazy } from 'react';

const Homepage = lazy(() => import('./Homepage'));

const homepageConfig = {
  settings: {
    layout: {
      config: {
        navbar: {
          display: false,
        },
        toolbar: {
          display: false,
        },
        footer: {
          display: false,
        },
        leftSidePanel: {
          display: false,
        },
        rightSidePanel: {
          display: false,
        },
      },
    },
  },
  routes: [
    {
      path: '/',
      element: <Homepage />,
    },
  ],
};

export default homepageConfig;

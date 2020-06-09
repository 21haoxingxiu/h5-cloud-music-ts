import React from 'react';
import { Redirect } from 'react-router-dom';
import Login from 'containers/User/Login';
import BlankLayout from 'layouts/BlankLayout';
import HomeLayout from 'layouts/HomeLayout';

import Recommend from 'containers/Recommend';
import Singer from 'containers/Singers';
import Album from 'containers/Album';
import { RouteConfig } from 'react-router-config';

const routes: RouteConfig[] = [
  {
    component: BlankLayout,
    routes: [
      {
        path: '/user',
        component: BlankLayout, //userLayout
        routes: [
          {
            path: '/user/login',
            exact: true,
            key: 'login',
            component: (Login as any),
          },
        ],
      },
      {
        path: '/',
        component: HomeLayout,
        // exact:true,
        routes: [
          {
            path: '/',
            exact: true,
            render: () => <Redirect to={'/user/login'} />,
          },
          {
            path: '/recommend',
            key: 'recommend',
            component: Recommend,
            routes: [
              {
                path: '/recommend/:id',
                exact: true,
                component: Album,
              },
            ],
          },
          {
            path: '/singers',
            key: 'singers',
            component: Singer
          },
        ],
      },
    ],
  },
];

export default routes;

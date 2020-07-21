import React, { lazy, Suspense } from "react";
import { Redirect } from 'react-router-dom';
import Login from 'containers/User/Login';
import BlankLayout from 'layouts/BlankLayout';
import HomeLayout from 'layouts/HomeLayout';

// import Singer from 'containers/Singers';
import { RouteConfig } from 'react-router-config';

const SuspenseComponent = (Component:any) => (props:any) => {
  return (
    <Suspense fallback={null}>
      <Component {...props}></Component>
    </Suspense>
  )
}


const RecommendComponent = lazy(() => import("../containers/Recommend/"));
const SingersComponent = lazy(() => import("../containers/Singers/"));
const SingerComponent = lazy(() => import("../containers/Singer"));
const AlbumComponent = lazy(() => import("../containers/Album"));
const RankComponent = lazy(() => import("../containers/Rank"));


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
            render: () => <Redirect to={'/recommend'} />,
          },
          {
            path: '/recommend',
            key: 'recommend',
            component: SuspenseComponent(RecommendComponent),
            routes: [
              {
                path: '/recommend/:id',
                exact: true,
                component: SuspenseComponent(AlbumComponent),
              },
            ],
          },
          {
            path: '/singers',
            key: 'singers',
            component: SuspenseComponent(SingersComponent),
            routes: [
              {
                path: "/singers/:id",
                component: SuspenseComponent(SingerComponent)
              },
            ]            
          },
          {
            path: "/rank",
            component: SuspenseComponent(RankComponent),
            key: "rank",
            routes: [
              {
                path: "/rank/:id",
                component: SuspenseComponent(AlbumComponent)
              }
            ]
          },          
        ],
      },
    ],
  },
];

export default routes;

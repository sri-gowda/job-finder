import React, { lazy } from 'react';
import { Redirect, Route } from 'react-router-dom';
// import { canAccessable } from '../service/authSrvc';

let Home = lazy(() => import('../pages/home'));
let Upskill = lazy(() => import('../pages/upskill'));
let PostAJob = lazy(() => import('../pages/postajob'));
let SigninPage = lazy(() => import('../pages/signin'));

const routes = [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/upskill',
        component: Upskill,
        exact: true
    },
    {
        path: '/post',
        component: PostAJob,
        exact: true
    },
    {
        path: '/signin',
        component: SigninPage,
        exact: true
    }
]

const ProtectectedRoutes = route => {
    console.log("route", route);
    const Component = route.component;
    return (
        <Route
            exact={route.exact}
            path={route.path}
            render={props => {
                // if(canAccessable(route)){
                //     return <Component {...props} routes={route.routes}/>
                // }else{
                //     return <Redirect to="/" />;
                // }
                return <Component {...props} routes={route.routes} />
            }}
        />
    )
}

export { routes, ProtectectedRoutes };


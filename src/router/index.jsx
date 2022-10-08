import React from 'react';
import { connect } from 'react-redux';
import { useRoutes } from 'react-router-dom';

import Layout from '@/layout/Index.jsx';
import Home from '../views/home/Home.jsx';
import Login from '../views/login/login.jsx'
import NotFound from '../views/404/NotFound.jsx';

function Routers(props) {
    const element = useRoutes([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    index: true,
                    path: '/home',
                    element: <Home />,
                    meta: {
                        title: '首页',
                    },
                    // children: []
                },
            ]
        },
        {
            path: '/login',
            element: <Login />,
            meta: {
                title: '登录'
            }
        },
        {
            path: '/404',
            element: <NotFound />,
            meta: {
                title: '404'
            }
        }
    ])
    return element
}

const mapDispatchToProps = {};

export default connect(state => state, mapDispatchToProps)(Routers);
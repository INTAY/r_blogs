import React from 'react';
import { connect } from 'react-redux';
import { useRoutes } from 'react-router-dom';

import Layout from '@/layout/Index.jsx';
import Home from '../views/home/Home.jsx';
import Login from '../views/login/login.jsx'
import NotFound from '../views/404/NotFound.jsx';
import Articles from '../views/article/Article.jsx';
import Albums from '../views/album/Albums.jsx';
import Holes from '../views/holes/Holes.jsx';
import Operatings from '../views/operatingSpace/operatingSpace.jsx';

function Routers(props) {
    const element = useRoutes([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <Home />,
                    meta: {
                        title: '首页',
                    },
                },
                {
                    path: '/operatings',
                    element: <Operatings />,
                    meta: {
                        title: '操作空间',
                    },
                },
                {
                    path: '/articles',
                    element: <Articles />,
                    meta: {
                        title: '文章',
                    },
                },
                {
                    path: '/albums',
                    element: <Albums />,
                    meta: {
                        title: '相册',
                    },
                },
                {
                    path: '/holes',
                    element: <Holes />,
                    meta: {
                        title: '树洞',
                    },
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
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { Layout } from 'antd';
import layout from './index.module.scss';

import Headers from '@/components/header/Header.jsx'
import Silders from '@/components/silder/Silder.jsx';

const { Header, Sider, Content } = Layout;

function Index(props) {
    const {collapsed} = props.layout;
    const { pathname } = useLocation()

    return (
        <div className={layout.layouts}>
            <Layout className={layout.contents}>
                {
                    pathname !== '/operatings' ? <>
                        <Header className={layout.headers}>
                            <Headers />
                        </Header>
                        <Content>
                            <Outlet />
                        </Content>
                    </> : <>
                        <Sider trigger={null} collapsible collapsed={collapsed}> <Silders /> </Sider>
                        <Layout>
                            <Header> <Headers /> </Header>
                            <Content> <Outlet /> </Content>
                        </Layout>
                    </>
                }
                {/* 代码 */}
            </Layout>
        </div>
    )
}

const mapDispatchToProps = {};

export default connect(state => state, mapDispatchToProps)(Index);
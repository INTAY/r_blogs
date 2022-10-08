import React from 'react';
import { connect } from 'react-redux';
import { Outlet } from 'react-router-dom';
import classNames from 'classnames';
import { Layout } from 'antd';
import layout from './index.module.scss';

import Headers from '../components/header/Header.jsx'
import Silders from '../components/silder/Silder.jsx';

const { Header, Sider, Content } = Layout;

function Index(props) {

    return (
        <div className={layout.layouts}>
            <Layout className={layout.contents}>
                <Header className={layout.headers}>
                    <Headers />
                </Header>
                <Content>
                    <Outlet />
                </Content>
            </Layout>
        </div>
    )
}

const mapDispatchToProps = {};

export default connect(state => state, mapDispatchToProps)(Index);
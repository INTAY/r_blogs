import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu } from 'antd';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import { menulist } from '@/utils/menuList.jsx';
import silder from './Silder.module.scss';

function getItem(label, key, icon, children, theme) {
    return { label, key, icon, children, theme };
}

function Sider(props) {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [collapsed, setCollapsed] = useState(false);


    const renderMenu = (menu) => {
        return (menu && menu.length) ? menu.map(item => {
            if (item.children) {
                return getItem(
                    <div>{item.title}</div>,
                    item.link,
                    <i className={item.icon}></i>,
                    renderMenu(item.children)
                )
            }
            return getItem(
                <div>{item.title}</div>,
                item.link,
                <i className={item.icon}></i>,
            )
        }) : []
    }

    return (
        <div className={silder.silders}>
            <div className={silder.title}>
                <span>{ !collapsed ? '个人博客' : '个'}</span>
                <span className={silder.title_collap} onClick={() => {
                    setCollapsed(!collapsed);
                    props.getCollapsed();
                }}>{collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}</span>
            </div>
            <div style={{ flex: 1, overflow: 'auto' }}>
                <Menu
                    mode='inline'
                    selectedKeys={pathname}
                    defaultSelectedKeys={pathname}
                    items={renderMenu(menulist)}
                />
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    getCollapsed () {
        return {
            type: 'collapsed'
        }
    }
};

export default connect(state => state, mapDispatchToProps)(Sider);
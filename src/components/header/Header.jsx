import React from 'react';
import { connect } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { Avatar, Dropdown, Menu, Space, Input, Button } from 'antd';
import { DownOutlined, SmileOutlined, SearchOutlined } from '@ant-design/icons';
import headers from './Header.module.scss'

function Header(props) {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const menu = (
        <Menu
            items={[
                {
                    key: '1',
                    label: <div>第一个</div>,
                },
                {
                    key: '2',
                    label: <div onClick={() => {navigate(pathname === '/' ? '/operatings' : '/')}}>{pathname === '/' ? '操作空间' : '首页'}</div>,
                    icon: <SmileOutlined />,
                },
                {
                    key: '3',
                    label: <div>第三个</div>,
                    disabled: true,
                },
                {
                    key: '4',
                    label: <div>第四个</div>,
                },
            ]}
        />
    );

    return (
        <div className={headers.header}>
            <div className={headers.search_box}>
                <Input type="text" className={headers.search_txt} placeholder="搜索" />
                <Button type="dash" shape="circle" icon={<SearchOutlined />} size={'large'} className={headers.search_btn} />
                {/* <div className={headers.search_line}></div> */}
            </div>
            <div style={{marginLeft: '10px'}}>
                <Avatar style={{ backgroundColor: '#ffbf00', verticalAlign: 'middle', marginRight: '10px' }} size="large" gap={4}>
                    User
                </Avatar>
                <Dropdown overlay={menu}>
                    <a onClick={(e) => e.preventDefault()}>
                        <Space>
                            Hover me
                            <DownOutlined />
                        </Space>
                    </a>
                </Dropdown>
            </div>
        </div>
    )
}

const mapDispatchToProps = {};

export default connect(state => state, mapDispatchToProps)(Header);
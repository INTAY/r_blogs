import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import login from './login.module.scss';

function Login(props) {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [isLogin, setLogin] = useState(true);

    const logins = () => {navigate('/')};
    const regist = () => {console.log('regist')};

    return (
        <div className={login.logins}>
            <Form className={login.login_form}>
                <h2>{isLogin ? '登陆' : '注册'}</h2>
                <Form.Item name="username" rules={[{ required: true, message: '请输入用户名' }]}>
                    <Input prefix={<UserOutlined />} placeholder="用户名" />
                </Form.Item>
                <Form.Item name="password"rules={[{ required: true, message: '请输入密码' }]}>
                    <Input prefix={<LockOutlined />} type="password" placeholder="密码"/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" onClick={isLogin ? logins : regist}>
                        {isLogin ? '登陆' : '注册'}
                    </Button>
                    <div className={login.login_form_collap} onClick={() => {setLogin(!isLogin)}}>{!isLogin ? '登陆' : '注册'}</div>
                </Form.Item>
            </Form>
        </div>
    )
}

const mapDispatchToProps = {};

export default connect(state => state, mapDispatchToProps)(Login);
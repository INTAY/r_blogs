import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import login from './login.module.scss';

function Login(props) {

    return (
        <div className={login.logins}>
            <div class="container">
            <form action="#" className={login.login_form}>
                <h2>登 录</h2>
                <input
                    type="text"
                    name="username"
                    placeholder="用户名"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="密码"
                />
                <button type="submit">登录</button>
            </form>
            </div>
        </div>
    )
}

const mapDispatchToProps = {};

export default connect(state => state, mapDispatchToProps)(Login);
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import home from './Home.module.scss'

function Home(props) {
    const navigate = useNavigate();
    return (
        <div className={home.homes}>
            <div className={home.articles} onClick={() => {
                navigate('/articles');
            }}>文章</div>
            <div className={home.pictures}onClick={() => {
               navigate('/albums');
            }}>图片</div>
            <div className={home.tokingHoles}onClick={() => {
                navigate('/holes');
            }}>树洞</div>
            <div className={home.logins} onClick={() => {
                navigate('/login');
            }}>登录</div>
        </div>
    )
}

const mapDispatchToProps = {};

export default connect(state => state, mapDispatchToProps)(Home);
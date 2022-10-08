import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import home from './Home.module.scss'

function Home(props) {
    const navigate = useNavigate();
    return (
        <div className={home.homes}>
            home
        </div>
    )
}

const mapDispatchToProps = {};

export default connect(state => state, mapDispatchToProps)(Home);
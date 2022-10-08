import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import Album from './Albums.module.scss'

function Albums(props) {
    const navigate = useNavigate();
    return (
        <div>
            相册
        </div>
    )
}

const mapDispatchToProps = {};

export default connect(state => state, mapDispatchToProps)(Albums);
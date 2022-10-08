import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import operatingSpace from './operatingSpace.module.scss'

function Operatings(props) {
    const navigate = useNavigate();
    return (
        <div>
            操作空间
        </div>
    )
}

const mapDispatchToProps = {};

export default connect(state => state, mapDispatchToProps)(Operatings);
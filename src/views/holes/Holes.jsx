import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import Hole from './Holes.module.scss'

function Holes(props) {
    const navigate = useNavigate();
    return (
        <div>
            树洞
        </div>
    )
}

const mapDispatchToProps = {};

export default connect(state => state, mapDispatchToProps)(Holes);
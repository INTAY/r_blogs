import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import Article from './Article.module.scss'

function Articles(props) {
    const navigate = useNavigate();
    return (
        <div>
            文章
        </div>
    )
}

const mapDispatchToProps = {};

export default connect(state => state, mapDispatchToProps)(Articles);
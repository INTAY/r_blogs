import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate,useLocation } from 'react-router-dom';
import { Menu } from 'antd';

function getItem (label, key, icon, children, theme) {
    return {label, key, icon, children, theme};
}

function Sider(props) {

    return (
        <div>
            侧边栏
            <img src="" alt="" srcset="" />
        </div>
    )
}

const mapDispatchToProps = {

};

export default connect(state => state, mapDispatchToProps)(Sider);
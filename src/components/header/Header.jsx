import React from 'react';
import { connect } from 'react-redux';

function Header(props) {

    return (
        <div>
            头部
        </div>
    )
}

const mapDispatchToProps = {};

export default connect(state => state, mapDispatchToProps)(Header);
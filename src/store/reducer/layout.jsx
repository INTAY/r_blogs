const init = {
    collapsed: false,
}

function layout (state = init, action) {
    const props = { ...state }
    switch (action.type) {
        case 'collapsed':
        props.collapsed = !props.collapsed;
        return props
        default:
            return state
    }
}

export default layout;
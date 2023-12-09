import React from 'react';
import state from '../store';
import { useSnapshot } from 'valtio';

import { getContrastingColor } from '../config/config/helpers';

const Button = ({ type, title, styles, handleClick }) => {

    const snap = useSnapshot(state)


    const generateStyle = () => {
        if (type === 'filled') {
            return {
                backgroundColor: snap.color,
                color: getContrastingColor(snap.color),
            }
        } else if (type === 'outline') {
            return {
                borderWidth: '1px',
                borderColor: snap.color,
                color: snap.color,
            }
        }
    }
    return (
        <button
            className={`px-2 py-1.2 flex-1 rounded-md ${styles}`}
            style={generateStyle(type)}
            onClick={handleClick}
        >
            {title}
        </button>
    )
}

export default Button;
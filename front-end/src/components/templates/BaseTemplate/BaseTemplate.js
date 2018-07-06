import React from 'react';
import styles from './BaseTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const BaseTemplate =({children}) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default BaseTemplate;

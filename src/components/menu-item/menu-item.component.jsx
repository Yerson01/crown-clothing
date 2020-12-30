import React from 'react';
import classnames from 'classnames';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ title, size, imageUrl, linkUrl, history, match }) => {
    const menuItemClasses = {
        'menu-item': true,
        [size]: Boolean(size)
    }

    return (
        <div
            className={classnames(menuItemClasses)}
            onClick={() => history.push(`${match.url}${linkUrl}`)}
        >
            <div className="background-image" style={{
                backgroundImage: `url(${imageUrl})`
            }} />
            <div className="content">
                <h2 className="title">{title}</h2>
                <span className="subtitle">Shop Now</span>
            </div>
        </div>
    )
};

export default withRouter(MenuItem);
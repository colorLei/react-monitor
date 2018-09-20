import React from 'react';
import {NavLink} from 'react-router-dom';

export default(props) => {
    const { routes } = props;
    return (
        <div className='select_group'>
            <label>数据维度：</label>
            <div>
                {routes.map(({path, name}) => (
                    <NavLink to={path} key={name} activeClassName="active">
                        {name}
                    </NavLink>
                ))
}
            </div>
        </div>
    );
}

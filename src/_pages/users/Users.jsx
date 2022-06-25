import React from 'react';
import { Outlet } from 'react-router-dom';

import { List, AddEdit } from './';

export { Users };

function Users() {
    
    return (
        <div className="p-4">
            <div className="container">
                <Outlet />
                {/* <Switch>
                    <Route exact path={path} component={List} />
                    <Route path={`${path}/add`} component={AddEdit} />
                    <Route path={`${path}/edit/:id`} component={AddEdit} />
                </Switch> */}
            </div>
        </div>
    );
}

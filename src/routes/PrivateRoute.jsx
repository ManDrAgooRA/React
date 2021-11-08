import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PrivateRoute({ path, component: Component }) {
    return (
        <Route
            path={path}
            exact
            render={(props) => {
                if (localStorage.getItem('session_id')) {
                    return <Component />;
                }
                return <Redirect to="/login" />;

            }}
        />
    );
}

export default PrivateRoute;

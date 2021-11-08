import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ path, component: Component }) {
    const sessionId = localStorage.getItem('session_id')
    console.log(Boolean(sessionId))
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

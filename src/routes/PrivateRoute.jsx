import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PrivateRoute({ path, component: Component }) {
    const user = useSelector((state) => state.user);
    return (
        <Route
            path={path}
            exact
            render={(props) => {
                if (user.isLoggedIn) {
                    return <Component />;
                }
                return <Redirect to="/login" />;

            }}
        />
    );
}

export default PrivateRoute;

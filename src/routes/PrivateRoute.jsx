import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PrivateRoute({ path, component: Component }) {
    const { isLoggedIn } = useSelector((state) => state.user);
    return (
        <Route
            path={path}
            exact
            render={(props) => {
                if (isLoggedIn) {
                    return <Component />;
                }
                return <Redirect to="/login" />;

            }}
        />
    );
}

export default PrivateRoute;

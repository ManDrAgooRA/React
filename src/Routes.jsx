import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { allRoutes } from './allRoutes'
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";

export default function Routes() {
    return (
        <Switch>
            {allRoutes.map(route => <Route key={uuidv4()} path={route.path} component={route.component} exact />)}
            <Redirect to='/error' />
        </Switch >
    )
}

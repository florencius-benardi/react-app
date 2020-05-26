import React from 'react'
import { Route, Redirect, Switch } from "react-router-dom";

export default function RouteHandler(route) {
    if (route.redirect) {
        return (
            <Redirect exact from={route.path} to={route.redirect} />
        );
    } else {
        if (route.component) {
            return (
                <Route
                    name={route.name}
                    path={route.path}
                    render={props => {
                        return (
                            <route.component {...props} routes={route.routes} />
                        );
                    }}
                />
            );
        } else if (route.routes) {
            return SubRouteHandler(route)
        }
    }
}

function SubRouteHandler(item) {
    return (
        <Switch key={`item-${item.path}`}>
            {item.routes.map((sub, i) => {
                if (sub.redirect) {
                    return (
                        <Redirect exact key={`sub-${i}`} from={sub.path} to={sub.redirect} />
                    );
                } else if (sub.component) {
                    return (
                        <Route
                            key={`sub-${i}`}
                            name={sub.name}
                            path={sub.path}
                            render={
                                props => { return (<sub.component {...props} routes={sub.routes} />) }
                            }
                        />
                    );
                } else if (sub.routes) {
                    return SubRouteHandler(sub)
                }
            })}
        </Switch>
    )
}
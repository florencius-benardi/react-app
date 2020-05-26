import React from 'react'
import { Route, Redirect, Switch } from "react-router-dom";
import * as page from "./path-loader";


const routes = [
    {
        path: '/login',
        component: page.login
    }
]

export default routes

export function RoutewithEntityRoutes(route) {
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
                    render={
                        props => {
                            return (
                                <route.component {...props} routes={route.routes} />
                            )
                        }
                    }
                />
            );
        } else {
            if (route.routes) {
                //map the children routes
                return handleSubRoute(route)
            }
        }
    }
}

function handleSubRoute(item) {
    //map the children routes
    return (
        <Switch key={`item-${item.path}`}>
            {item.routes.map((sub, i) => {
                // console.log(sub,i)
                if (sub.redirect) {
                    return (
                        <Redirect exact key={`sub-${i}`} from={sub.path} to={sub.redirect} />
                    );
                } else

                    if (sub.component) {
                        return (
                            <Route key={`sub-${i}`}
                                name={sub.name}
                                path={sub.path}
                                render={
                                    props => {
                                        return (
                                            <sub.component {...props} routes={sub.routes} />
                                        )
                                    }
                                }
                            />
                        )
                    }

                    else if (sub.routes) {
                        //map the children routes
                        return handleSubRoute(sub)
                    }
            })}
        </Switch>
    )
}
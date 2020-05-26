import { createStore, compose, applyMiddleware, } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import createRootReducer from "./reducers/reducer";

export const browsingHistory = createBrowserHistory()

function configureStore(preLoadedState) {
    const store = createStore(
        createRootReducer(browsingHistory),
        preLoadedState,
        compose(
            applyMiddleware(
                routerMiddleware(browsingHistory),
            ),
        ),
    )
    return store
}

const store = configureStore(/* provide initial state if any */)

export default store
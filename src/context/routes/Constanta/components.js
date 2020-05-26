import { loadable } from 'react-loadable'
import { LoaderComponent } from "./../../../components/Loading/Loading"

export const login = loadable(
    {
        loader: () => import('./../../../domain/Permissions/main-page/index'),
        loading: LoaderComponent
    }
)

/*
export const permissions = loadable(
    {
        loader: () => import('../interface/permissions/main-page/index'),
        loading: LoaderComponent
    }
)

export const roles = loadable(
    {
        loader: () => import('../interface/roles/main-page/index'),
        loading: LoaderComponent
    }
)
*/
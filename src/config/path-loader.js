import { loadable } from 'react-loadable'
import { LoaderComponent } from "@/components/widgets/loader/index"

export const login = loadable(
    {
        loader: () => import('@/interface/auth/login/index'),
        loading: LoaderComponent
    })

export const permissions = loadable(
    {
        loader: () => import('@/interface/permissions/main-page/index'),
        loading: LoaderComponent
    }
)

export const roles = loadable(
    {
        loader: () => import('@/interface/roles/main-page/index'),
        loading: LoaderComponent
    }
)
import Users from './components/pages/Users';
import CreateModal from './components/pages/CreateModal'
import Error from './components/pages/Error'
import UserInformation from './components/pages/UserInformation'

export const allRoutes = [
    { path: '/users', component: Users },
    { path: '/users/:id', component: UserInformation },
    { path: '/create', component: CreateModal },
    { path: '/error', component: Error },

]
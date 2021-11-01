import Users from './components/pages/Users';
import CreateContest from './components/pages/CreateContest'
import Error from './components/pages/Error'
import UserInformation from './components/pages/UserInformation'
import CompetitionList from './components/pages/CompetitionList'
import CompetitionInformation from './components/pages/CompetitionInformation'

export const allRoutes = [
    { path: '/competition', component: CompetitionList },
    { path: '/competition/:id', component: CompetitionInformation },
    { path: '/users', component: Users },
    { path: '/users/:id', component: UserInformation },
    { path: '/create', component: CreateContest },
    { path: '/error', component: Error },

]
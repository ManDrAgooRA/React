import Favorites from './pages/Favorites'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Movies from './pages/Movies'
import Movie from './pages/Movie'
import UserInformation from './pages/UserInformation'
import Error from './pages/Error'

export const allRoutes = [
    { path: '/login', component: Login },
    { path: '/signup', component: SignUp },
    { path: '/favorites', component: Favorites, isPrivate: true },
    { path: '/movies', component: Movies, isPrivate: true },
    { path: '/movies/:id', component: Movie, isPrivate: true },
    { path: '/userinformation', component: UserInformation, isPrivate: true },
    { path: '/error', component: Error },
]

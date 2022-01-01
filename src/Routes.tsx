import MovieDetails from 'pages/MovieDetails'
import Movies from 'pages/Movies'
import { Switch, Route, Router } from 'react-router-dom'
import history from 'utils/history'
import Navbar from './components/Navbar'
import Home from './pages/Home'

const Routes = () => (
  <Router history={history}>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/movies" exact>
        <Movies />
      </Route>
      <Route path="/movies/:movieId">
        <MovieDetails />
      </Route>
    </Switch>
  </Router>
)

export default Routes

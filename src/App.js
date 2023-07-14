import {BrowserRouter, Route} from 'react-router-dom'
import {Switch} from 'react-dom'
import Home from './components/Home'
import Cuisine from './components/Cuisine'
import SearchResults from './components/SearchResults'
import Recipe from './components/Recipe'
import NavBar from './components/NavBar'

const App = () => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/cuisine/:type" component={Cuisine} />
      <Route exact path="/searchQuery/:term" component={SearchResults} />
      <Route exact path="/recipe/:name" component={Recipe} />
    </Switch>
  </BrowserRouter>
)

export default App

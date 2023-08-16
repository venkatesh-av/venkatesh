import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import SecondPage from './components/SecondPage'
import LeftNav from './components/LeftNav'

const App = () => (
  <div className="main-page-container">
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={LeftNav} />
        <Route exact path="/editing" component={SecondPage} />
      </Switch>
    </BrowserRouter>
  </div>
)

export default App

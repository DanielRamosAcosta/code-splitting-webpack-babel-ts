import React from "react"
import { render } from "react-dom"
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom"
import { HomeLazy } from "./pages/HomeLazy"
import { AboutLazy } from "./pages/AboutLazy"
import { BigPageLazy } from "./pages/BigPageLazy"

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/big-page">Big Page</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <AboutLazy />
          </Route>
          <Route path="/big-page">
            <BigPageLazy />
          </Route>
          <Route path="/">
            <HomeLazy />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

render(<App />, document.body)

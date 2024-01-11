import { Suspense } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
import { routes } from './routes'

import logo from '../logo.svg';

import { LazyPage1 } from '../01-lazyload/pages'

export const Navigation = () => {



  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Router>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {
                routes && routes.map(({ to, name }) => (
                  <li key={to}>
                    <NavLink to={to} activeClassName='nav-active'>{name}</NavLink>
                  </li>
                ))
              }
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>

            {
              routes && routes.map(({ path, Component }) => (
                <Route key={path} path={path}>{<Component />}</Route>
              ))
            }
            <Route path='/*'><LazyPage1 /></Route>
          </Switch>
        </div>
      </Router>
    </Suspense>
  );
}
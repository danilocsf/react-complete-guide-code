import React from 'react';
import Authcontext from '../../Context/auth-context';

import classes from './Navigation.module.css';

const Navigation = (props) => {
  return (
    /*(ctx) possui o conteudo do React.createContext em auth-cntext - React.createContext({
    isLoggedIn: false
}); */
    <Authcontext.Consumer>
     
      {(ctx) => {
        return (
          <nav className={classes.nav}>
            <ul>
              {ctx.isLoggedIn && (
                <li>
                  <a href="/">Users</a>
                </li>
              )}
              {ctx.isLoggedIn && (
                <li>
                  <a href="/">Admin</a>
                </li>
              )}
              {ctx.isLoggedIn && (
                <li>
                  <button onClick={props.onLogout}>Logout</button>
                </li>
              )}
            </ul>
          </nav>
        )
      }
      }

    </Authcontext.Consumer>
  );
};

export default Navigation;

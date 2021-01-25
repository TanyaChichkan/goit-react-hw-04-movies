import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import routes from '../../services/routes';
import './Navigation.css';

import mainRoutes from '../../routes/mainRoutes';


const Navigation=()=>{
  const location = useLocation();
  return (
    <>
    <ul className="Navigation-wrapper">

      {mainRoutes.map(({path, name, exact })=>(
      <li key={path}>
        <NavLink
          exact={exact}
          to={{
            pathname: path,
            state: { from: location},
          }}
          className="Navigation-link"
          activeClassName="Navigation-link-active">
          {name}
        </NavLink>
      </li>
      ))}
    </ul>
    </>
  )
}

export default Navigation;
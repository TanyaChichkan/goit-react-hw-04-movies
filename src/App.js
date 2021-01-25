import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {Suspense,lazy} from 'react';
import Navigation from './components/navigation/Navigation';
import NotificationPage from './components/notification/NotificationPage';
import Container from './components/container/Container';

import mainRoutes from './routes/mainRoutes';
import movieDetRoutes from './routes/movieDetRoutes';
import DetailsRoutes from './components/details/detailsRoutes';
import {header} from './App.module.css';

function App() {
  return (
    <>
    <header className={header}>
      <Container>
        <Navigation/>
        </Container>
    </header>


    <Suspense fallback={<div>Loading...</div>}>
      <Switch>


        {mainRoutes.map(({path, exact, component: MyComponent})=>(
            <Route
            path={path}
            exact={exact}
            key={path}
            render={(props) => <MyComponent {...props}/>}
          />
        ))}



        {movieDetRoutes.map(({path, exact, component: MyComponent})=>(
            <Route
            path={path}
            exact={exact}
            key={path}
            render={(props) => <MyComponent {...props}/>}
          />
        ))}

        <Route component={NotificationPage} />

  




      </Switch>
    </Suspense>

    </>
  );
}

export default App;

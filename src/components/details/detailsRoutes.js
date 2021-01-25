import React, { Suspense } from "react";
import additionalRoutes from '../../routes/additionalRoutes';
import { Switch, Route, useRouteMatch } from "react-router-dom";

const DetailsRoutes=({match})=>{
  return(
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
    {additionalRoutes.map(({path, exact, component: MyComponent})=>(
          <Route
          path={path}
          exact={exact}
          key={path}
          render={(props) => <MyComponent {...props}/>}
        />
      ))}
    </Switch>
  </Suspense>
  )
};

export default DetailsRoutes;
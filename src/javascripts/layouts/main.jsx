import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import '../../styles/style.scss'
// components
import Header from '../../javascripts/components/header';

// helpers
import Routes from '../../javascripts/helpers/routes';

function Main() {
  function getRoutes() {
    const routeComponents = Routes.map(({ path, exact, component }, key) => (
      <Route
        path={path}
        exact={exact}
        component={component}
        key={`route-${key}`}
      />
    ));

    return routeComponents;
  }

  return (
    <BrowserRouter>
      <>
        <Header />
        <div className="wrapper">{getRoutes()}</div>
      </>
    </BrowserRouter>
  );
}

export default Main;

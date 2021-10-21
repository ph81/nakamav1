import React from 'react';
import { useRoutes } from 'hookrouter';
import routes from './helpers/Navigation'

const App = () => {
  const routeResult = useRoutes(routes);
  //return routeResult;

  return (
    <>
    {routeResult || <h1>PAGE  NOT FOUND</h1>}
    </>
  )
}

/*
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
*/
export default App;
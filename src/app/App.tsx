import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  );
}

export default App;

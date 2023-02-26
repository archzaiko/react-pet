import { RouterProvider } from 'react-router-dom';

import { AppRouter } from './app.router';

function App(): JSX.Element {
  return <RouterProvider router={AppRouter} />;
}

export default App;

import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { Header } from 'features/components/Header';
import { AnimatedPage } from 'features/components/AnimatedPage';

export const RootPage = (): JSX.Element => {
  const location = useLocation();
  if (location.pathname === '/') return <Navigate to="inbox" />;

  return (
    <AnimatedPage>
      <div className="h-full flex flex-col">
        <header>
          <Header />
        </header>
        <main className="flex-1">
          <Outlet />
        </main>
        <footer></footer>
      </div>
    </AnimatedPage>
  );
};

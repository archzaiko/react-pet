import ReactDOM from 'react-dom/client';

import './index.css';

import { App } from 'app/App';

const root: ReactDOM.Root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <StrictMode>
  <App />
  // </StrictMode>
);

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';

import App from './App';

// import { store } from './redux/Store';

const rootElem = document.getElementById('root');

if (rootElem) {
  const root = ReactDOM.createRoot(rootElem);
// basename="/polite-mermaid-f255d3.netlify.app"
  root.render(
    <BrowserRouter >
      <App />
    </BrowserRouter>
  );
}

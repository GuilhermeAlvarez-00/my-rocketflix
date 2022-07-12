import ReactDOM from 'react-dom/client';
import App from './App';
import { ToastContainer } from 'react-toastify';

import { GlobalStyles } from './styles/GlobalStyles';

import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  //<React.StrictMode>
  <>
    <App />
    <GlobalStyles />
    <ToastContainer />
  </>
  //</React.StrictMode>
);

import { ToastContainer } from 'react-toastify';
import Routes from './routes';
import Global from './styles/global';

import 'react-toastify/dist/ReactToastify.css';

const App = () => (
  <>
    <Global />
    <ToastContainer position='top-right' autoClose={1500} />
    <Routes />
  </>
);

export default App;

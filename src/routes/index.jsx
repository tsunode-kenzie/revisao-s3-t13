import { Route, Routes } from 'react-router-dom';
import Dashboard from '../page/Dashboard';
import Home from '../page/Home';

const RoutesMain = () => (
  <Routes>
    <Route path='/' element={<Home />}>
      <Route path='/:name' element={<h1>Posts</h1>} />
      <Route path='/abacaxi' element={<h1>Abacaxi</h1>} />
    </Route>
    <Route path='/dashboard' element={<Dashboard />} />
  </Routes>
);

export default RoutesMain;

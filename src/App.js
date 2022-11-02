import { Route, Routes } from 'react-router-dom';
import Main from './components/Main'
import Shop from './components/Shop';
import Account from './components/Account';
import Detail from './components/Detail'
import Athletics from './components/Athletics';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />}></Route>
      <Route path='/main' element={<Main />}></Route>
      <Route path='/shop' element={<Shop />}></Route>
      <Route path='/account' element={<Account />}></Route>
      <Route path='/shop/detail' element={<Detail />}></Route>
      <Route path='/athletics' element={<Athletics />}></Route>
    </Routes>
  );
}

export default App;

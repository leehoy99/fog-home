import { Route, Routes } from 'react-router-dom';
import Main from './components/Main'
import Shop from './components/Shop';
import Account from './components/Account';
import Detail from './components/Detail'
import Athletics from './components/Athletics';
import Contact from './components/Contact';
import './App.css';
import ShippingPolicy from './components/client-service/ShippingPolicy';
import PlacingAnOrder from './components/client-service/PlacingAnOrder';
import PaymentInformation from './components/client-service/PaymentInformation';
import ReturnPolicy from './components/client-service/ReturnPolicy';
import Covid19Notice from './components/client-service/Covid19Notice';
import PrivacyPolicy from './components/legal-notices/PrivacyPolicy';
import MenuExtendTest from './components/MenuExtendTest';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />}></Route>
      <Route path='/main' element={<Main />}></Route>
      <Route path='/shop' element={<Shop />}></Route>
      <Route path='/shop/detail' element={<Detail />}></Route>
      <Route path='/account' element={<Account />}></Route>
      <Route path='/athletics' element={<Athletics />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/placing-an-order' element={<PlacingAnOrder />}></Route>
      <Route path='/payment-information' element={<PaymentInformation />}></Route>
      <Route path='/shipping-policy' element={<ShippingPolicy />}></Route>
      <Route path='/return-policy' element={<ReturnPolicy />}></Route>
      <Route path='/covid-19-notice' element={<Covid19Notice />}></Route>
      <Route path='/privacy-policy' element={<PrivacyPolicy />}></Route>
      <Route path='/extend-setting' element={<MenuExtendTest />}></Route>
    </Routes>
  );
}

export default App;

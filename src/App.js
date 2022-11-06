import { Route, Routes, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
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
import Nav from './ui/Nav';
import Bottom from './ui/Bottom';
import Bag from './bag/Bag';
function App() {
  const [item, setItem] = useState('')
  const [display, setDisplay] = useState('');
  const [blur, setBlur] = useState('');
  useEffect(() => {
    const fetchItemData = async () => {
        const res = await fetch("https://fakestoreapi.com/products");
        const json = await res.json();
        const transformedItem = await json;
        setItem(transformedItem)
        console.log(transformedItem)
      }
      fetchItemData();
    },[])
    const getDis = (display) => {
        setDisplay(display)
        console.log('display on app')
      };
      const getBlur = (blur) => {
        setBlur(blur)
      }
      useEffect(() => {
        getDis();
      },[display])
    useParams();
  return (
    <>
    <Nav getDis={getDis} classInfo={`main`} getBlur={getBlur}/>
    <Routes>
      <Route path='/' element={<Main  blur={blur}/>}></Route>
      <Route path='/main' element={<Main blur={blur}/>}></Route>
      <Route path='/shop' element={<Shop itemData={item}/>}></Route>
      <Route path='/shop/detail/:id' element={<Detail />}></Route>
      <Route path='/account' element={<Account blur={blur}/>}></Route>
      <Route path='/athletics' element={<Athletics blur={blur}/>}></Route>
      <Route path='/contact' element={<Contact blur={blur}/>}></Route>
      <Route path='/placing-an-order' element={<PlacingAnOrder blur={blur}/>}></Route>
      <Route path='/payment-information' element={<PaymentInformation blur={blur}/>}></Route>
      <Route path='/shipping-policy' element={<ShippingPolicy blur={blur}/>}></Route>
      <Route path='/return-policy' element={<ReturnPolicy blur={blur}/>}></Route>
      <Route path='/covid-19-notice' element={<Covid19Notice blur={blur}/>}></Route>
      <Route path='/privacy-policy' element={<PrivacyPolicy blur={blur}/>}></Route>
      <Route path='/extend-setting' element={<MenuExtendTest blur={blur}/>}></Route>
    </Routes>
    <Bag display={display}/>
    <Bottom />
    </>
  );
}

export default App;

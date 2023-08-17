import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import UserDetailsHeader from './Components/UserDetailsHeader/UserDetailsHeader';
import OverView from './Pages/OverView/OverView';

import Customers from './Pages/Customers/Customers';
import Customer from './Pages/Customer/Customer';
import Defaulters from './Pages/Defaulters/Defaulters';
import Fulfillments from './Pages/Fulfilments/Fulfillments';
import Fulfilment from './Pages/Fulfilment/Fulfilment';
import Summary from './Pages/Summary/Summary';

function App() {
  return (
    <div className='app'>
      <NavBar />
      <div className='rightSection'>
        <UserDetailsHeader />
        <div className='BodySection'>
          <Routes>
            <Route path='/' element={<OverView />} />
            <Route path='/customers' element={<Customers />} />
            <Route path='/fulfilments' element={<Fulfillments />} />
            <Route path='/fulfilment/:id' element={<Fulfilment />} />
            <Route path='/defaulters' element={<Defaulters />} />
            <Route path='/customer/:id' element={<Customer />} />
            <Route path='/summary' element={<Summary />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

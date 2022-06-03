import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import 'swiper/css';
import AddAProduct from './Pages/Dashboard/AddAProduct';
import AddReviw from './Pages/Dashboard/AddReviw';
import Dashboard from './Pages/Dashboard/Dashboard';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import ManageOrder from './Pages/Dashboard/ManageOrder';
import ManageProduct from './Pages/Dashboard/ManageProduct';
import MyOrder from './Pages/Dashboard/MyOrder';
import MyProfile from './Pages/Dashboard/MyProfile';
import UpdateProfile from './Pages/Dashboard/UpdateProfile';
import Home from './Pages/Home/Home';
import AllTools from './Pages/Items/AllTools';
import Order from './Pages/Items/Order';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Protected/RequireAuth';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
import Portfolio from './Pages/Portfolio/Portfolio'
import NotFound from './Pages/Shared/NotFound';
import Payment from './Pages/Dashboard/Payment';
import { useEffect, useState } from 'react';
import Spinner from './Pages/Spinner/Spinner';
import Profile from './Pages/Home/Profile';

function App() {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 500)
  }, [])
  return loader ? (<Spinner></Spinner>) : (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/tools" element={<AllTools></AllTools>}></Route>
        <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
        <Route path="/order/:orderId" element={<RequireAuth>
          {<Order></Order>}
        </RequireAuth>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}>
          <Route index element={<MyProfile></MyProfile>}>
          </Route>
          <Route path="review" element={<AddReviw></AddReviw>}></Route>
          <Route path='order' element={<MyOrder></MyOrder>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='manageOrder' element={<ManageOrder></ManageOrder>}></Route>
          <Route path='addProduct' element={<AddAProduct></AddAProduct>}></Route>
          <Route path='manageProduct' element={<ManageProduct></ManageProduct>}></Route>
          <Route path='makeAdmin' element={<MakeAdmin></MakeAdmin>}></Route>
          <Route path='updateProfile' element={<UpdateProfile></UpdateProfile>}></Route>
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>

      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;

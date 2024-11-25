import './App.scss';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom"
import Bookingscreen from './screens/Bookingscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import Profile from './screens/ProfileScreen';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';
import "react-toastify/ReactToastify.min.css"
import AdminRoute from './components/AdminRoute';
import AdminBookings from './screens/admin/AdminBookings';
import AdminRooms from './screens/admin/AdminRooms';
import AdminUsers from './screens/admin/AdminUsers';
function App() {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Homescreen} />
          <Route path='/register' exact Component={Registerscreen} />
          <Route path='/login' exact Component={Loginscreen} />
          <Route element={<PrivateRoute />}>
            <Route path='/bookings' exact Component={Profile} />
            <Route path='/book/:roomid/:fromDate/:toDate' exact Component={Bookingscreen} />
          </Route>
          <Route element={<AdminRoute/>}>
          <Route path='/admin/bookings' exact Component={AdminBookings} />
          <Route path='/admin/rooms' exact Component={AdminRooms} />
          <Route path='/admin/users' exact Component={AdminUsers} />

          </Route>



        </Routes>
        <Footer />
      </BrowserRouter>





    </>
  );
}

export default App;

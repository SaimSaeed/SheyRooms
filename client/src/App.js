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


function App() {
  return (
    <>
 
<BrowserRouter>
<Navbar/>
<Routes>
<Route  path='/home'    exact Component={Homescreen}/>
<Route path='/book/:roomid/:fromDate/:toDate' exact Component={Bookingscreen}/>
<Route path='/register' exact Component={Registerscreen}/>
<Route path='/login' exact Component={Loginscreen}/>


</Routes>

</BrowserRouter>





    </>
  );
}

export default App;

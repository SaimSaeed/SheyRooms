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


function App() {
  return (
    <>
 <Navbar/>
<BrowserRouter>

<Routes>
<Route  path='/home'    exact Component={Homescreen}/>
<Route path='/book/:roomid' exact Component={Bookingscreen}/>


</Routes>

</BrowserRouter>





    </>
  );
}

export default App;

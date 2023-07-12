import './App.scss';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import {
  BrowserRouter,
  Route,
  Routes,
  Link
} from "react-router-dom"


function App() {
  return (
    <>
 <Navbar/>
<BrowserRouter>

<Routes>
<Route  path='/home'    exact Component={Homescreen}/>



</Routes>

</BrowserRouter>





    </>
  );
}

export default App;

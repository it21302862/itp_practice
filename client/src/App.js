import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import Edit from './components/Edit';
import Details from './components/Details';
import{BrowserRouter,Routes,Route} from 'react-router-dom';




function App() {
  return (
    <BrowserRouter>
    <div className='container'>
      <Navbar/>
      <Routes>
      <Route path ="/" exact element ={<Home/>}></Route>
      <Route path="/register" element ={<Register/>}></Route>
      <Route path="/edit/:id" element ={<Edit/>}></Route>
      <Route path="/view/:id" element ={<Details/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;



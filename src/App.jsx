import {Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home';
import Form from './pages/Form';
import Front from './pages/front';
import './App.css';
function App() {
  return (
<div> 
  <Navbar/>
  <Routes>
    <Route path="/front" element ={<Front />} />
    <Route path="/home" element ={<Home />} />
    <Route path="/Form" element ={<Form />} />
   </Routes>
</div>
  );
}

export default App;

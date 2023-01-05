import './App.css';
import {
  BrowserRouter as Router,  Routes,  Route,  Link} from 'react-router-dom';
import Acceuil from './Acceuil';
import Login from './Login';
import AdminPage from './AdminPage';
import AddUser from './AddUser';
import Theme5 from './Theme5';
import AdminCon from './AdminCon';
import AddBook from './AddBook';
import AccLang from './AccLang';
import AdminP2 from './AdminP2';
import BookDetails from './BookDetails';
import AddUser2 from './AddUser2';
function App() {
  return (
    <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Acceuil</Link>
        </li>
        <li>
          <Link to="/acclang">Acceuil langue</Link>
        </li>
         <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/addbook">Ajouter livre</Link>
        </li>
        <li>
          <Link to="/adduser">Ajouter utilisateur</Link>
        </li>
        <li>
          <Link to="/adduser2">Ajouter utilisateur2</Link>
        </li>
        <li>
          <Link to="/admincon">Admin connecte</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
        <li>
          <Link to="/admin2">Admin2</Link>
        </li> 
        <li>
          <Link to="/theme5">Theme5</Link>
        </li> 
        <li>
          <Link to="/bookdetails">Details Livre</Link>
        </li> 
      </ul>

      <hr />

   
      <Routes>
      <Route  path='/' element={< Acceuil />}></Route>
      <Route  path='/acclang' element={< AccLang />}></Route>
      <Route  path='/addbook' element={< AddBook />}></Route>
      <Route  path='/adduser' element={< AddUser />}></Route>
      <Route  path='/adduser2' element={< AddUser2 />}></Route>
      <Route  path='/admincon' element={< AdminCon />}></Route>
      <Route  path='/admin2' element={< AdminP2 />}></Route>
      <Route  path='/admin' element={< AdminPage />}></Route>
      <Route  path='/login' element={< Login />}></Route>
      <Route  path='/theme5' element={< Theme5 />}></Route>
      <Route  path='/bookdetails' element={< BookDetails />}></Route>

      </Routes>
  
     
    </div>
  </Router>
  );
}

export default App;

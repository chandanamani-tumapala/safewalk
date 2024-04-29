import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './pages/Signin';
import UserSignUp from './pages/UserSignup';
import SignUp from './pages/signup';
import Escortsignup from './pages/EscortSignup';
import'./css/app.css'
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/usersignup' element={<UserSignUp />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/escortsignup' element={<Escortsignup/>}/>
      </Routes>
    </Router>
  );
}

export default App;
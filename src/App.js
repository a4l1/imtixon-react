import Header from './Components/Header/Header';
import './App.css';
import Main from './Components/Main/Main';
import Footer from './Components/footer/Footer';
import { useContext } from 'react';
import { AuthContext } from './Components/Main/AuthContext';
import { Route, Routes } from 'react-router-dom';
import { Login } from './Components/Main/Login/Login';
import { Singlepage } from './Components/Main/SinglePage/Singlepage';
import { Xato } from './Components/Erro/Error';
import { ThemeContext } from './DarkModeContext';

function App() {
const { theme } = useContext(ThemeContext)
  const {  token } = useContext(AuthContext)
  return (
 <>
 {

 
  token ? (

   <div className={`App ${theme == "dark" && "active"}`}>
 
  <Header />

    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/buy' element={<Singlepage />} />
    </Routes>
  <Footer />

  
  
  
 </div>
 
  ):(
    <Routes >
      <Route path='/' element={<Login />}/>
      <Route path='*' element={<Xato />} />
    </Routes>
  )
 }
 </>
  );
}

export default App;

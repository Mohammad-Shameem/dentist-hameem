import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import Home from './pages/Home/Home/Home';
import Checkout from './pages/Checkout/Checkout';
import NotFound from './pages/NotFound/NotFound';
import Login from './pages/Login/Login';
import SignUp from './pages/Login/SignUp/SignUp';
import RequireAuth from './pages/RequireAuth/RequireAuth';
import Loading from './pages/Shared/Loading/Loading';
import Blogs from './pages/Blogs/Blogs';
import About from './pages/About/About';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/loading' element={<Loading></Loading>}></Route>
        <Route path='/blog' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

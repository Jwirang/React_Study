import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './layouts/main';
import Home from './pages/home';
import Login from './pages/login';
import Post from './pages/post';

function App() {
  return (
    <Routes>
      <Route element={<Main />}>
        <Route path='/' element={<Home />} />
        <Route path='/post/:id' element={<Post />} />
      </Route>
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default App;

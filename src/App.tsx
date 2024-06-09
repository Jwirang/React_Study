import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './layouts/main';
import CreateOrUpdate from './pages/create';
import Home from './pages/home';
import Login from './pages/login';
import Post from './pages/post';

function App() {
  return (
    <Routes>
      <Route element={<Main />}>
        <Route path='/' element={<Home />} />
        <Route path='/post/:id' element={<Post />} />
        <Route path='/create' element={<CreateOrUpdate />} />
        <Route path='/update/:id' element={<CreateOrUpdate />} />
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/join' element={<Login />} />
    </Routes>
  );
}

export default App;

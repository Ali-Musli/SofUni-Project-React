import 'bootstrap/dist/css/bootstrap.min.css';


import StaticExample from './components/Create/Create';
import TextControlsExample from './components/Login/Login';
import Register from './components/Register/Register';
import GridExample from './components/Catalog/Catalog';
import ColorSchemesExample from './components/NavBar/NavBar';

import { Routes, Route } from 'react-router-dom'
import { Contexts } from './contexts/Contexts'

import * as postService from './services/postService';
import * as authService from './services/authService'

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home } from './components/Home/Home';
import ImgOverlayExample from './components/Details/Details';



function App() {
  const [posts, setPost] = useState([])

  useEffect(() => {
    postService.getAll()
    .then(res => setPost(res))
  }, [])

  const [auth, setAuth] = useState({})

  const navigate = useNavigate()

  const onCreateSubmit = (data) => {
    postService.create(data, auth.accessToken)
      .then(res => console.log(data))
  }

  const onLoginSubmit = (data) => {
    authService.login(data)
    .then(res => setAuth(res))

    navigate('/')
  }

  const onRegisterSubmit = (data) => {
    const {confirmPassword, ...regData} = data;

    if(confirmPassword !== regData.password){
      return console.log('Password not match!');
    }

    authService.register(regData)
    .then(res => setAuth(res))
    navigate('/')
  }

  const contex = {
    onCreateSubmit,
    onLoginSubmit,
    onRegisterSubmit,
    auth,
    posts,
    isAuth: !!auth.accessToken
  }
  return (
    <Contexts.Provider value={contex}>
      <ColorSchemesExample />
      <div >
        <Routes>
          <Route path='/catalog' element={<GridExample />}></Route>
          <Route path='/create' element={<StaticExample />}></Route>
          <Route path='/login' element={<TextControlsExample />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/details/:postId' element={<ImgOverlayExample />}></Route>
        </Routes>
      </div>
    </Contexts.Provider>
  );
}

export default App;

import 'bootstrap/dist/css/bootstrap.min.css';


import StaticExample from './components/Create/Create';
import TextControlsExample from './components/Login/Login';
import Register from './components/Register/Register';
import GridExample from './components/Catalog/Catalog';
import ColorSchemesExample from './components/NavBar/NavBar';
import ImgOverlayExample from './components/Details/Details';
import { Delete } from './components/Delete/Delete';
import { Edit } from './components/Edit/Edit';
import { Home } from './components/Home/Home';

import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'
import { Contexts } from './contexts/Contexts'

import * as postService from './services/postService';
import * as authService from './services/authService'
import { Logout } from './components/Logout/Logout';
import MyProfile from './components/MyProfile/MyProfile';




function App() {
  const [posts, setPost] = useState([])
  const getAllPosts = async () => {
    const posts = await postService.getAll()
    const res = posts.reverse()
    setPost(res)
  }

  useEffect(() => {
    getAllPosts()
  }, [])

  const [auth, setAuth] = useState({})
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const onCreateSubmit = (data) => {
    if(!data.titile || !data.location || !data.imageUrl || !data.description){
      return setError('Fields required!')
    }

    postService.create(data, auth.accessToken)
      .then(res => setPost([...posts, res]))

    getAllPosts()
    navigate('/catalog')
  }

  const OnDelSubmit = (id) => {
    try {
      if(window.confirm('Do you really want to delete this post?')){
      postService.del(id, auth.accessToken);
      setPost(state => state.filter(x => x._id !== id))
      }
    } catch (err) {
      console.log(err.message)
    }
  }

  const onEditSubmit = async (id, data) => {
    const result = await postService.edit(id, data, auth.accessToken)
    setPost(state => state.map(x => x._id === id ? result : x));

    navigate(`/details/${id}`)
  }

  const onLoginSubmit = async (data) => {
    if(!data.email || !data.password){
      return setError('Fields required!')
    }

    const res = await authService.login(data)
    if (res.code) {
      setAuth({});
      return setError(res.message)
    }

    setAuth(res);
    navigate('/');
  }

  const onRegisterSubmit = async (data) => {
    const { confirmPassword, ...regData } = data;

    if(!regData.password || !regData.email || !confirmPassword){
      return setError('Fields required!')
    }

    if(regData.password.length < 4 || regData.password.length > 10){
      return setError("Your password must be 4-10 characters long")
    }

    if (confirmPassword !== regData.password) {
      return setError("Password not match!")
    }

    const res = await authService.register(regData);
    if (res.code) {
      setAuth({});
      setError(res.message)
      return
    }

    setAuth(res);
    navigate('/');
  }

  const onLogoutClick = async () => {
    const response = await authService.logout(auth.accessToken)
    if (!response.ok) {
      setError(response.message)
      console.log(response);
      return
    }

    setAuth({})
    setError(null)
  }

  const contex = {
    onCreateSubmit,
    OnDelSubmit,
    onLoginSubmit,
    onRegisterSubmit,
    onLogoutClick,
    auth,
    error,
    posts,
    isAuth: !!auth.accessToken
  }
  return (
    <Contexts.Provider value={contex}>
      <ColorSchemesExample />
      <div >
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/profile' element={<MyProfile />}></Route>
          <Route path='/catalog' element={<GridExample />}></Route>
          <Route path='/create' element={<StaticExample />}></Route>
          <Route path='/login' element={<TextControlsExample />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/details/:postId' element={<ImgOverlayExample />}></Route>
          <Route path='/delete/:postId' element={<Delete />} ></Route>
          <Route path='/edit/:postId' element={<Edit onEditSubmit={onEditSubmit} />} ></Route>
          <Route path='/logout' element={<Logout />}></Route>
        </Routes>
      </div>
    </Contexts.Provider>
  );
}

export default App;

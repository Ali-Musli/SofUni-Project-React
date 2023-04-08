import 'bootstrap/dist/css/bootstrap.min.css';

import StaticExample from './components/Create/Create';
import TextControlsExample from './components/Login/Login';
import Register from './components/Register/Register';
import GridExample from './components/Catalog/Catalog/Catalog';
import ColorSchemesExample from './components/NavBar/NavBar';
import ImgOverlayExample from './components/Details/Details/Details';
import { Delete } from './components/Delete/Delete';
import { Edit } from './components/Edit/Edit';
import { Home } from './components/Home/Home';

import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'
import { AuthProvider } from './contexts/Contexts'

import * as postService from './services/postService';
import { Logout } from './components/Logout/Logout';
import MyProfile from './components/MyProfile/MyProfile/MyProfile';
import { RouteGuard } from './components/RouteGuard/RouteGuard';
import { Error } from './components/Error/Error';

function App() {
  const [posts, setPost] = useState([]);
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const getAllPosts = async () => {
    const posts = await postService.getAll()
    const res = posts.reverse()
    setPost(res)
  }

  useEffect(() => {
    getAllPosts()
  }, [])


  const onCreateSubmit = async (data) => {
    if (!data.titile || !data.location || !data.imageUrl || !data.description) {
      return setError('required!')
    }

    await postService.create(data)
      .then(res => setPost([...posts, res]));


    getAllPosts()
    navigate('/catalog')
  }

  const OnDelSubmit = async (id) => {
    try {
      if (window.confirm('Do you really want to delete this post?')) {
        await postService.del(id);
        setPost(state => state.filter(x => x._id !== id))
      }
    } catch (err) {
      console.log(err.message)
    }
  }

  const onEditSubmit = async (id, data) => {
    if (!data.titile || !data.location || !data.imageUrl || !data.description) {
      return setError('required!')
    }
    const result = await postService.edit(id, data)
    setPost(state => state.map(x => x._id === id ? result : x));

    navigate(`/details/${id}`)
  }

  return (
    <AuthProvider>
      <ColorSchemesExample />
      <div >
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/profile' element={<RouteGuard> <MyProfile /> </RouteGuard>}></Route>
          <Route path='/catalog' element={<GridExample posts={posts} />}></Route>
          <Route path='/create' element={<RouteGuard> <StaticExample onCreateSubmit={onCreateSubmit} error={error} /> </RouteGuard>}></Route>
          <Route path='/login' element={<TextControlsExample error={error} />}></Route>
          <Route path='/register' element={<Register error={error} />}></Route>
          <Route path='/details/:postId' element={<ImgOverlayExample />}></Route>
          <Route path='/delete/:postId' element={<RouteGuard> <Delete OnDelSubmit={OnDelSubmit} /> </RouteGuard>}></Route>
          <Route path='/edit/:postId' element={<RouteGuard> <Edit onEditSubmit={onEditSubmit} err={error} /> </RouteGuard>}></Route>
          <Route path='/logout' element={<RouteGuard> <Logout /> </RouteGuard>}></Route>
          <Route path='*' element={<Error />}></Route>
        </Routes>
      </div>
    </AuthProvider>
  );
}
export default App;

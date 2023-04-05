import { useContext, useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { Contexts } from '../../contexts/Contexts';
import * as posetService from '../../services/postService'
import { ItemMyProfil } from './ItemMyProfile';
import { Link } from 'react-router-dom';

import style from './MyProfile.module.css'

function MyProfile() {
    const [posts, setPosts] = useState([])
    const { auth } = useContext(Contexts)
    const userId = auth._id;
    console.log(userId);

    const getMyPosts = async () => {
        const response = await posetService.getAll()
        const res = response.filter(function (post) {
            return post._ownerId === userId
        })

        const result = res.reverse()
        setPosts(result)
    }

    useEffect(() => {
        getMyPosts()
    }, [userId])

    return (
        <div className={style.bgImage}>
            {posts.length > 0 &&
                <Row xs={1} md={2} className="g-4">
                    {posts.map(x => (<ItemMyProfil key={x._id} {...x} />))}
                </Row>
            }

            {posts.length === 0 &&
                <div className={style.content}>
                    <h1>You don`t have posts yet</h1>
                    <h2>You can create your first post</h2>
                    <Link className={style.btns} to='/create'>Create</Link>
                </div>
            }

        </div>
    );
}

export default MyProfile;
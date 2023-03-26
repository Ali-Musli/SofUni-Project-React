import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import style from './Details.module.css'

import * as postService from '../../services/postService'

function ImgOverlayExample() {
    const [post, setPost] = useState({})

    const { postId } = useParams();

    useEffect(() => {
        postService.getOne(postId)
            .then(res => setPost(res))
    }, [postId])
    console.log(postId);
    return (
        <section className={style.about}>
            <div className={style.main}>
                <img src={post.imageUrl} />
                <div className={style.text}>
                    <h1>Titile: {post.titile}</h1>
                    <h4>Location: Sofia</h4>
                    <p>
                    I am a front-end web developer. I can provide clean code and pixel perfect design. I also make the website more & more interactive with web animations. I can provide clean code and pixel perfect design. I also make the website more & more interactive with web animations.A responsive design makes your website accessible to all users, regardless of their device.
                    </p>
                </div>
                <div className={style.btns}>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
        </section>
    );
}

export default ImgOverlayExample;
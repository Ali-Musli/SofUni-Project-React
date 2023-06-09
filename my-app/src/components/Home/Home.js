import { Link } from 'react-router-dom';

import style from './Home.module.css';

export const Home = () => {
    return (
        <>
        <div className={style.bgImage}></div>
        <div className={style.content}>
            <h2>Travel <span>Blog</span></h2>
            <p>Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <Link to='/catalog' className={style.btn}>See All Posts</Link>
        </div>
        </>

    )
}
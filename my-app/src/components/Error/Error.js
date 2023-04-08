import style from './Error.module.css';
import { Link } from 'react-router-dom';

export const Error = () => {
    return (
        <div className={style.main}>
            <div className={style.content}>
                <h1>Opps.. an error!</h1>
                <h2>Page you`re looking for id not found</h2>
                <Link to='/' className={style.btns}>Go back to home</Link>
            </div>
        </div>
    )
}
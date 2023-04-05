import Row from 'react-bootstrap/Row';

import { useContext } from 'react';
import { Contexts } from '../../contexts/Contexts';
import { Link } from 'react-router-dom';

import { CatalogItem } from './CatalogItem';
import style from './Catalog.module.css'

function GridExample() {
  const { posts, isAuth } = useContext(Contexts)

  return (
    <div className={style.main}>
      {posts.length > 0 &&
        <Row xs={1} md={1} className="g-4">
          {posts.map(x => <CatalogItem key={x._id} {...x} />)}
        </Row>}

      {posts.length === 0 &&
        <div className={style.content}>
          <h2>There are no posts yet</h2>
          {isAuth ?
            <>
              <h2>You can create first post</h2>
              <Link to='/create'>Create</Link>
            </>
            :
            <>
              <h2>Login and create first post</h2>
              <Link to='/login'>Login</Link>
            </>
          }
        </div>
      }
    </div>
  );
}

export default GridExample;
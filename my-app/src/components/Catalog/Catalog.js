import Row from 'react-bootstrap/Row';

import { useContext } from 'react';
import { Contexts } from '../../contexts/Contexts';

import { CatalogItem } from './CatalogItem';

function GridExample() {
  const { posts } = useContext(Contexts)
  return (
    <Row xs={1} md={2} className="g-4">
      {posts.map(x => <CatalogItem key={x._id} {...x}/>)}
    </Row>
  );
}

export default GridExample;
import { useContext } from 'react';
import { Contexts } from '../../contexts/Contexts';

import Accordion from 'react-bootstrap/Accordion';

import style from './Details.module.css';

function AlwaysOpenExample({
    useremail
}) {
    const { auth } = useContext(Contexts)
  return (
    <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="1">
        <Accordion.Header className={style.accordion}>You want to learn more about this post? Click for contact the owner of the post.</Accordion.Header>
        <Accordion.Body>
            Email address for contact: <span className={style.spann}>{useremail}</span> 
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AlwaysOpenExample;
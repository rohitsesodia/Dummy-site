import react from 'react';
import '../box.css';

import { Card, Button } from 'react-bootstrap';

function Box_inner (props){
    return (

        <div className="col-sm-4">
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={process.env.PUBLIC_URL + props.user_images}  />
        <Card.Body>
          <Card.Title>{props.name_user}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      </div>
           

    )


}
export default Box_inner;
import react from 'react';
import '../box.css';

import { Card, Button } from 'react-bootstrap';

const users = [
    {
        name: 'ram',
        title: 'title1'
    },
    {
        name: 'shyam',
        title: 'title2'
    },
    {
        name: 'shyam1',
        title: 'title2'
    },
    {
        name: 'shyam2',
        title: 'title2'
    }

]

function Statebox (){

    return(
        <div className="container">
              <h2>State Box</h2>
             <div className="row">
            {users.map((userItem, index) =>
                (

                    <div class="col-sm-4">
                <Card key={index}>
       <Card.Header as="h5">{userItem.name}</Card.Header>
       <Card.Body>
         <Card.Title>Special title treatment</Card.Title>
         <Card.Text>
           With supporting text below as a natural lead-in to additional content.
         </Card.Text>
         <Button variant="primary">Go somewhere</Button>
       </Card.Body>
     </Card>
     </div>

                )
            )}
            </div>
      
        <div className="row">
      
       <div className="col-sm-4">
       {/* <Card>
                       <h2 key={index} >{userItem.name}</h2>
       <Card.Header as="h5">Featured</Card.Header>
       <Card.Body>
         <Card.Title>Special title treatment</Card.Title>
         <Card.Text>
           With supporting text below as a natural lead-in to additional content.
         </Card.Text>
         <Button variant="primary">Go somewhere</Button>
       </Card.Body>
     </Card> */}
     </div>
     </div>
     </div>
        )

}



export default Statebox;
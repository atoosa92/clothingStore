import React from 'react';
//import globalStyles from '../../src/assets/bootstrap.min.module.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './sample.module.css';

const Sample =(props)=>{


    return(
        <div>

            <Card>
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title className={styles.title}>{props.title}</Card.Title>
                    <hr className={styles.lineSeprator}/>
                    <Card.Text> 
                    <span style={{fontWeight:'bold',fontSize:'2rem'}}>${props.price}</span>
                    </Card.Text>
                    <Button className={styles.btn} onClick={()=>props.selectedItem(props.id)}>Add to cart</Button>
                </Card.Body>
            </Card>
   </div>



     );
}
  
    

export default Sample;
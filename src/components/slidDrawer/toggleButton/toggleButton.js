import React from 'react';
import Button from 'react-bootstrap/Button';
import classes from './toggleButton.module.css';



const ToggleButton=(props)=>{
    
        return(

            <Button className={classes.btnToggle} onClick={props.clicked}>
                <i className="fas fa-shopping-cart"></i>
            </Button>

        );
    
}


export default ToggleButton;
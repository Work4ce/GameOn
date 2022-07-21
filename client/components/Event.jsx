/* eslint-disable */
import React, { useState, useContext } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { UserContext } from '../index.jsx';
import axios from 'axios';

const Event = (props) => {
  const [going, setGoing] = useState(false);
  
  const context = useContext(UserContext);
  
let testObj = {royce: true};

  const handleChange = (e) => {
    // console.log('changed!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    setGoing(e.target.checked);
      console.log("target id →", e.target.id);
      console.log('context (email of user)  →', context.email) 
    const event = e.target.id;
    axios.put(`/api/eventListings/`, {eventID: event, userId: context._id})
      .then((data) => {
        console.log('data that I want', data);
        if(data.id) {
          data.id = data;
        } else {
  
          alert('login required to join event');
        }
      })
      .catch((err) => {
        
        console.error(err);
      })
  }
  
 return (
    
      <div>
        <div>-------------------------------------------</div>
        <h4>Type of Event: </h4>
      <div>{ props.eventData.catName }</div>  
      <h4>Details: </h4>   
      <div>{ props.eventData.description }
        <h5>Starting @ { props.eventData.time }</h5>
      </div>
      <h4>Location yo: </h4>
      <div>{ props.eventData.address }</div>
      <h4>What day?: </h4>
      <div>{ props.eventData.date.substring(0, 10) }</div>
      <FormGroup>
      <FormControlLabel control={<Switch color="warning" onChange={ handleChange } checked={ going } id={ props.eventData._id }/>} label="Going" />
    </FormGroup>
      <div>-------------------------------------------</div>
      </div>
    
  );

}
export default Event;
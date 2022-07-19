/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import SportsSelect from './SportsSelect.jsx';
import EquipmentList from './EquipmentList.jsx';

const ENV = require('../../.env');

const { MAP_TOKEN } = ENV;
const today = new Date();

const CreateEvents = () => {
  const [sport, setSport] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState(`${today.getFullYear()}-${today.getMonth() < 10 ? `0${today.getMonth() + 1}` : today.getMonth()}-${today.getDate()}`);
  const [time, setTime] = useState('12:00');
  const [playerLimit, setPlayerLimit] = useState(0);
  const [equipment, setEquipment] = useState([]);
  const [item, setItem] = useState('');
  let categoryId;

  if (sport) {
    axios.get('/api/categories')
      .then((categories) => {
        categoryId = categories.data.filter((category) => category.category === sport)[0]._id;
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const handleEquipmentList = () => {
    setEquipment([...equipment, item]);
    setItem('');
  };

  const handleItem = (e) => {
    setItem(e.target.value);
  };

  const handleSelectSport = (e) => {
    setSport(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleTime = (e) => {
    setTime(e.target.value);
  };

  const handleLocation = (e) => {
    setLocation(e.target.value);
  };

  const handlePlayerLimit = (e) => {
    setPlayerLimit(JSON.parse(e.target.value));
  };

  const postEvent = () => {
    axios.post('/api/event', {
      locName: location,
      description,
      date,
      time,
      category: categoryId,
      catName: sport,
      players: playerLimit,
      isOpen: true,
    });

    setSport('');
    setDescription('');
    setLocation('');
    setPlayerLimit(0);
    setDate(`${today.getFullYear()}-${today.getMonth() < 10 ? `0${today.getMonth() + 1}` : today.getMonth()}-${today.getDate()}`);
    setTime('12:00');
    setEquipment([]);
    setItem('');
  };

  return (
    <div>
      <h1>THIS IS WHERE YOU CREATE NEW EVENTS</h1>

      <form>
        <SportsSelect handleSelectSport={handleSelectSport}/>

        <div id='description'>
          <textarea
            rows='5'
            cols='60'
            maxLength='500'
            onChange={(e) => handleDescription(e)}
            value={description}
            placeholder='enter description here'
          />
        </div>

        <div id="playerLimit">
          <input
            type='number'
            onChange={(e) => handlePlayerLimit(e)}
            min='1' max='100'
            value={playerLimit}
          /> # of players
        </div>

        <div id='location'>
          <input
            type='text'
            maxLength='100'
            onChange={(e) => handleLocation(e)}
            placeholder='enter event address'
            value={location}
          />
        </div>

        <div id='equipment'>
          <input
            type='text'
            onChange={(e) => handleItem(e)}
            maxLength='20'
            placeholder='list equipment here'
            value={item}
          />
          <Button variant="contained" onClick={() => handleEquipmentList()}> add item </Button>
        </div>

        <EquipmentList equipment={equipment}/>

        <div id='date'>
          <input
            value={date}
            onChange={(e) => handleDate(e)}
            type='date'
          />
        </div>

        <div id='time'>
          <input
            type='time'
            value={time}
            onChange={(e) => handleTime(e)}
          />
        </div>

        <div id='submit'>
          <Button variant="contained" onClick={postEvent}> POST EVENT </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateEvents;

// const query = location.split(' ').join('_');
// const queryUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?type=poi&access_token=${MAP_TOKEN}`;
// console.log(queryUrl);
// axios.get(queryUrl)
//   .then((results) => {
//     console.log(results.features[0].center);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

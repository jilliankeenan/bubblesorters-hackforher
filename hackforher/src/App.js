import React from 'react';
import logo from './logo.svg';
import Modal from './components/Modal'
import Jar from './components/Jar'
import TopBar from './components/TopBar'
import EventEntry from './components/EventEntry'
import { post } from './services';
import { userDefinedEvents } from './services/store'
import './App.css';

// console.log(userDefinedEvents, 'userDefinedEvents')

// post({text: 'jill', tag: 'Course'})
// post({text: 'jill', tag: 'Course'})
// post({text: 'jill', tag: 'Course'})
// post({text: 'jill', tag: 'Course'})

// console.log(userDefinedEvents)
function App() {
  return (
    <div className="App">
      <TopBar/>
       
       <Jar/>
        <EventEntry/>
    </div>
  );
}

export default App;

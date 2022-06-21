import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav.js';
import Title from './components/Title.js';
import Body from './components/Body.js';
import Img from './components/Img.js';
import Card from './components/Card';
import React from 'react';


function App() {
  return (
    <div className='container'>
      <React.StrictMode>

        <Nav />
        
        <Card i="https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d" title="Cat" b="Some quick example text to build on the card title and make up the bulk of the card's content." />

        <Card i="https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d" title="Cat2" b="Some quick example text to build on the card title and make up the bulk of the card's content."/>

        <Card i="https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d" title="Cat3" b="Some quick example text to build on the card title and make up the bulk of the card's content."/>

        <Card i="https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d" title="Cat4" b="Some quick example text to build on the card title and make up the bulk of the card's content."/>
        
        {/* <Title />
      <Body />
      <Img /> */}
      </React.StrictMode>

    </div>
  );
}

export default App;

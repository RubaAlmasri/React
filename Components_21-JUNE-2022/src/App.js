import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav.js';
import Title from './components/Title.js';
import Body from './components/Body.js';
import Img from './components/Img.js';


function App() {
  return (
    <div className='container'>
      <Nav />
      <Title />
      <Body />
      <Img />
    </div>
  );
}

export default App;

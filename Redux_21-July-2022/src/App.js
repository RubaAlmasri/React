import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { Deposite, Withdraw } from './store/action';
import { useState } from 'react';


function App() {
  const [counter, setCounter]= useState(0);
  const count = useSelector((state) => state);
  const disPatch = useDispatch();
  return (
    <div>
      <input type='text' onChange={(e)=>setCounter(e.target.value)}></input>
      <button onClick={() => disPatch(Deposite(counter))}>Deposite +</button>
      <button onClick={() => disPatch(Withdraw(counter))}>Withdraw -</button>

      <h1>counter:{count} </h1>
    </div>
  );
}

export default App;

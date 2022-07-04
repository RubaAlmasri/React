import './App.css';
import { Component } from 'react';
import Consumer from './components/Consumer';
import { UserContext } from './components/Context'


// export const context=createContext();


class App extends Component {
  state = {
    color: 'red'
  };


  changeHandle = (c) => {
    this.setState({ color: c });
  }

  render() {

    return (
      <UserContext.Provider value={{ state: this.state, changeHandle: this.changeHandle }}>
        <Consumer />
      </UserContext.Provider>
    );
  }
}

// function App() {
//   return (
//     <div className="App">

//     </div>
//   );
// }

export default App;

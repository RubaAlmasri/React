import logo from './logo.svg';
import './App.css';
import Delete_crud from './components/Delete_crud';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Edit from './components/Edit';

function App() {
  return (
    <div className="App">
      <Delete_crud />
      {/* <Router>

            <Route exact path='/' component={Delete_crud} />

          <Route path='/update' component={Edit} />
      </Router> */}
    </div>
  );
}

export default App;

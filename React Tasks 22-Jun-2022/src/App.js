import logo from './logo.svg';
import './App.css';
import Sort from './component/Sort.js';
import Filter from './component/Filter.js';
import Map from './component/Map.js';
import SortTask from './component/SortTask.js';
import FilterTask from './component/FilterTask.js';
import MapTask from './component/MapTask.js';


function App() {
  return (
    <div>
      {/* <Sort />
      <Map />
      <Filter /> */}
      <SortTask />
      <MapTask />
      <FilterTask />
      
    </div>
  );
}

export default App;

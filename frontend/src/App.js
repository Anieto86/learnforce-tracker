
import './App.css';

//*components
import Navbar from './components/Navbar';
import FilterInput from './components/FilterInput';
import Table from './components/Table';
import ButtonRequest from './components/ButtonRequest';

function App() {
  return (
    <div className="App">
      <Navbar />
      <FilterInput />
      <Table />
      <ButtonRequest/>
    </div>
  );
}

export default App;

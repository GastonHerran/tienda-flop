import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <NavBar />
        </p>
      </header>
      <ItemListContainer saludo='Soy un item' />
    </div>
  );
}

export default App;

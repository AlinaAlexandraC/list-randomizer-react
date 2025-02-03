import './App.css';
import Display from './Components/Display/Display';
import TitlesList from './Components/TitlesList/TitlesList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <TitlesList></TitlesList>
          <Display></Display>
        </div>
      </header>
    </div>
  );
}

export default App;

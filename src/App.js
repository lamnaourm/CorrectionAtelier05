import './App.css';
import JeuDe from './components/JeuDe';

function App() {
  const max=6, min=1;
  const valeur = Math.floor(Math.random()*(max-min) + min)
  return (
    <div className="container">
      <JeuDe cache={valeur} />
    </div>
  );
}

export default App;
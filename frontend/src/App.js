import MainRouter from './MainRouter'
import { BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;

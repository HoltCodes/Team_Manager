import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './Views/main';
import PlayerStatus from './components/PlayerStatus';


function App() {  
  return (
    <BrowserRouter>
    <div className='App'>
      <Routes>
        <Route path='/' element={ <Main/> }/>
        <Route path='/status/game/1'element={ <PlayerStatus/> }/>
        <Route/>
      </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;

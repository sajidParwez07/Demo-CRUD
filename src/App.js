import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Check from './Components/check';
import Edit from './Components/edit';


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path='/' element={<Check/>}/>
        <Route exact path='/edit/:id' element={<Edit/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;



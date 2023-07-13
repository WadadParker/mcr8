import logo from './logo.svg';
import './App.css';

import { Routes,Route } from 'react-router-dom';

import {Home} from "./pages/home/Home";
import { EventDetail } from './pages/eventDetails/EventDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event/:eventID" element={<EventDetail />} />
      </Routes>
    </div>
  );
}

export default App;

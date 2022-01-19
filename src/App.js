import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Bio from './components/Bio/Bio';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Portfolio from './components/Portfolio/Portfolio';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="bio" element={<Bio />} />
          <Route path="contact" element={<Form />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

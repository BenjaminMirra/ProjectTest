import './App.css';
import { Home } from './components/Pages/Home';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Contact } from './components/Pages/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/contact"
            element={
              <Contact
              />
            }
          />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

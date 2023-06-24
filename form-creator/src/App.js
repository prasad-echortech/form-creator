
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Createform from './components/Createform';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Createform" element={<Createform />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

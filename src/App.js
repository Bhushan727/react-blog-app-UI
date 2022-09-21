
import { Routes, Route} from 'react-router-dom';
import './App.css';
import './components/Styling.css';
import Home from './pages/HomePage';
import Navbar from './components/Navbar';
import Bollywood from './pages/Bollywood';
import Technology from './pages/Technology';
import Hollywood from './pages/Hollywood';
import Fitness from './pages/Fitness';
import Food from './pages/Food';
import Data from './config/Data';
import CategoryDetails from './pages/categoryDetails';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
      <Data>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/bollywood' element={<Bollywood />} />
          <Route path='/technology' element={<Technology />} />
          <Route path='/hollywood' element={<Hollywood />} />
          <Route path='/fitness' element={<Fitness />} />
          <Route path='/food' element={<Food />} />
          <Route path='/technology/:userId' element={<CategoryDetails />} />
          <Route path='/bollywood/:userId' element={<CategoryDetails />} />
          <Route path='/hollywood/:userId' element={<CategoryDetails />} />
          <Route path='/fitness/:userId' element={<CategoryDetails />} />
          <Route path='/food/:userId' element={<CategoryDetails />} />
          
        </Routes>
      </Data>
      <Footer />
      </div>
    </>
  );
}

export default App;

// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    //BEM
    <div className="App">
      <Router>
        <Routes>
          <Route path='/search' element={<SearchPage />}>
            
          </Route>
          <Route path='/'element={<Home />} >
            
          </Route>
        </Routes>
      {/* <h1>Let's build a google clone</h1> */}
      </Router>
    </div>
  );
}

export default App;

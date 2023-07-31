import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { MyRoutes } from './Routes/config/Routes';

function App() {
  return (
    <div className="App">
      <Router>
        <MyRoutes/>
      </Router>
    </div>
  );
}

export default App;

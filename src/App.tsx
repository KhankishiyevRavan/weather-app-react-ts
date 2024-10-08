import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Weather from "./pages/Weather";
function App() {
  return (
    <div className="App">
      <Router  basename="/weather-app-react-ts">
        <Routes>
          <Route path="/" element={<Weather />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

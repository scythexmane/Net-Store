import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from './pages/Home.jsx';

export default function App() {
  return (
    <Router>
      <HomePage />
    </Router>
  );
}
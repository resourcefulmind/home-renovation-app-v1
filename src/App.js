import { Route, Routes } from 'react-router-dom';
import { CalculationPage, Homepage } from './pages';


const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route exact path="/calculation" element={<CalculationPage />} />
    </Routes>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import Auth from './pages/Auth';
import Calculate from './pages/Calculate';
import Main from './pages/Main';

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/calculate" element={<Calculate />} />
        <Route path="/auth:" element={<Auth />} />
      </Routes>
    </>
  );
}

export default App;

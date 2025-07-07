import Dashboard from './components/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ServiceDetail from './components/ServiceDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path='/service/:name' element={<ServiceDetail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App

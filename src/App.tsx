
import { Route, Routes  } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css'
import Home from './pages/Home';

function App() {

  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App

import { RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import router from './routes';
import Aos from 'aos';

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
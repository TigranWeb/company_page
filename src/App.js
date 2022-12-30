import { RouterProvider } from 'react-router-dom';
import router from "./router";
import FoolPageLoader from './pages/loader';
import './App.css';

function App() {
  return <RouterProvider router={router}
    fallbackElement={<FoolPageLoader/>}
  />
        
        // return  <FoolPageLoader /> 
}

export default App;

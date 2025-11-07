import {createBrowserRouter} from 'react-router-dom';
import { Landing } from '../Components/Landing/Landing';
import { Login } from '../Components/Login/Login';

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Landing/>
    },
    {
        path:"/Login",
        element:<Login/>
    }
]);
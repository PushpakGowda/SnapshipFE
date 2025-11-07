import {createBrowserRouter} from 'react-router-dom';
import { Landing } from '../Components/Landing/Landing';

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Landing/>
    }
]);
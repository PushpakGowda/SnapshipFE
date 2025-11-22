import {createBrowserRouter} from 'react-router-dom';
import { Landing } from '../Components/Landing/Landing';
import { Login } from '../Components/Login/Login';
import { SignUp } from '../Components/Login/SignUp';
import { LoginLayout } from '../Components/Login/LoginLayout';
import { ForgotPassword } from '../Components/Login/ForgotPassword';
import { OTPPage } from '../Components/Login/OTP';
import { ChangePassword } from '../Components/Login/ChangePassword';
import { AppLayout } from '../Components/Application/App';
import { Uploads } from '../Components/Application/Uploads';
import { Albums } from '../Components/Application/Albums';
import { Orders } from '../Components/Application/Orders';
import { Cart } from '../Components/Application/Cart';
import { Setting } from '../Components/Application/Settings';
import { ViewAlbum } from '../Components/Application/ViewAlbum';
import { Print } from '../Components/Application/Print';
import { Payment } from '../Components/Application/Payment/Payment';
import { ProtectedRoute } from './ProtectedRoute';

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Landing/>
    },
    {
    path: "/Login",
    element: <LoginLayout />, 
    children: [
        { index: true, element: <Login /> }, 
        { path: "SignUp", element: <SignUp /> },
        { path: "ForgotPassword", element: <ForgotPassword /> },
        { path: "ChangePassword", element: <ChangePassword /> },
        { path: "OTP", element: <OTPPage /> },
    ],
    },
    {
        element: <ProtectedRoute />, 
        children: [
            {
                path: "/App",
                element: <AppLayout />,
                children: [
                    { index: true, element: <Uploads />},
                    { path: "uploads", element: <Uploads />},
                    { path: "albums", element: <Albums />},
                    { path: "albums/viewAlbum", element: <ViewAlbum/>},
                    { path: "orders", element: <Orders />},
                    { path: "cart", element: <Cart />},
                    { path: "settings", element: <Setting />},
                    { path: "print", element: <Print />},
                    { path: "payment", element: <Payment />},
                ],
            },
        ],
    }
]);
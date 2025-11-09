import {createBrowserRouter} from 'react-router-dom';
import { Landing } from '../Components/Landing/Landing';
import { Login } from '../Components/Login/Login';
import { SignUp } from '../Components/Login/SignUp';
import { LoginLayout } from '../Components/Login/LoginLayout';
import { ForgotPassword } from '../Components/Login/ForgotPassword';
import { OTPPage } from '../Components/Login/OTP';
import { ChangePassword } from '../Components/Login/ChangePassword';

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
    }
]);
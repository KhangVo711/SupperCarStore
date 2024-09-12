import { useLocation } from 'react-router-dom';
import Register from "./authen/Register.jsx";
import Login from "./authen/Login.jsx";

export default function Authentical() {
    const location = useLocation();

    const renderComponent = () => {
        if (location.pathname === "/supper-car-k/authen/register") {
            return <Register />;
        } 
        if (location.pathname === "/supper-car-k/authen/login") {
            return <Login />;
        }
        return null; 
    };

    return (
        <>
            {renderComponent()}
        </>
    );
}
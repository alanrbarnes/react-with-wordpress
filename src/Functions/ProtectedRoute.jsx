import { Navigate } from "react-router-dom";
import { tokenLoader } from "../Functions/Functions.component";

const ProtectedRoute = ({ element }) => {
    const token = tokenLoader();

    return token ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;

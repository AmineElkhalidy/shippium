import Layout from "./components/Layout/Layout";
import { Routes, Route } from "react-router-dom";

//pages
import Parcels from "./pages/Parcels";
import Dashboad from "./pages/Dashboad";
import NotFound from "./pages/404";
import Login from "./pages/Auth/Login";
import CreateAccount from "./pages/Auth/CreateAccount";
import PrivateRoute from "./components/Route/PrivateRoute";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route
                    index
                    element={
                        <PrivateRoute>
                            <Dashboad />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/parcels"
                    element={
                        <PrivateRoute>
                            <Parcels />
                        </PrivateRoute>
                    }
                />
            </Route>

            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;

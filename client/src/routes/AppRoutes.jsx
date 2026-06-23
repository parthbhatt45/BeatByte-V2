import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Search from "../pages/Search";
import Library from "../pages/Library";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ArtistPage from "../pages/ArtistPage";

import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
    return (
        <Routes>
            <Route
                path="/login"
                element={<Login />}
            />

            <Route
                path="/register"
                element={<Register />}
            />

            <Route
                path="/"
                element={
                    <ProtectedRoute>
                        <Home />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/search"
                element={
                    <ProtectedRoute>
                        <Search />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/library"
                element={
                    <ProtectedRoute>
                        <Library />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/profile"
                element={
                    <ProtectedRoute>
                        <Profile />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/artist/:artistName"
                element={
                    <ProtectedRoute>
                        <ArtistPage />
                    </ProtectedRoute>
                }
            />
        </Routes>
    );
}

export default AppRoutes;
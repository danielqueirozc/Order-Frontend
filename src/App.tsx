import { Login } from "./components/login";
import { Products } from "./components/products";
import { Register } from "./components/resgister";

import { AuthProvider ,useAuth } from "./contexts/AuthContext";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { token } = useAuth();
  return token ? <>{children}</> : <Navigate to="/login" />;
};

export function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route 
          path="/products" 
          element = {
            <PrivateRoute>
              <Products />
            </PrivateRoute>
          } 
        />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>
  )
}


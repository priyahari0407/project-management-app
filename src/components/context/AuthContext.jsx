import React, { createContext, useContext, useState, useEffect } from "react";
import authService from "../../services/authService";

const AuthContext = createContext();
export function AuthProvider({ children }) {
  const [user, setUser] = useState(
    () => JSON.parse(localStorage.getItem("user")) || null
  );
  const [token, setToken] = useState(
    () => localStorage.getItem("token") || null
  );

  useEffect(() => {
    localStorage.setItem("token", token || "");
    localStorage.setItem("user", JSON.stringify(user) || null);
  }, [token, user]);

  async function login(credentials) {
    const res = await authService.login(credentials);
    setToken(res.token);
    setUser(res.user);
  }

  function logout() {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

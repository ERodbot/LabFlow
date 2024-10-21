import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest, verifyToken } from "../api/auth";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const iniciar_sesion = async ({ email, password }) => { 
    try{
      const res = await loginRequest({ email, password });
      setUser(res.data);
      setIsAuthenticated(true);
      
    } catch (err) {
      console.log(err);
    }
    
  };

  const register = async ({ email, password, name, apellido1, apellido2 }) => {
    try {
      const apellidos = apellido1 + " " + apellido2;
      const res = await registerRequest({ email, password, name, apellidos });
      return res;
    } catch (err) {
      console.log(err);
    }
  };

  const logout = () => {
    Cookies.remove("token");
    setUser(null);
    setIsAuthenticated(false);
  };

  useEffect(() => {
    const checkLogin = async () =>{
      const cookies = Cookies.get();
        if (!cookies.token) {
          setIsAuthenticated(false);
          setLoading(false);
          return setUser(null);;
        }

        try {
          const res = await verifyToken(cookies.token);
          if (!res.data) {
            setIsAuthenticated(false);
            setLoading(false);
            return
          }
          setUser(res.data);
          setIsAuthenticated(true);
          setLoading(false);
        } catch (error) {
          setIsAuthenticated(false);
          setUser(null);
        }
      };
      checkLogin();
    }, []);

  return (
    <AuthContext.Provider value={{
      user,
      iniciar_sesion,
      isAuthenticated,
      logout,
      loading,
      register
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
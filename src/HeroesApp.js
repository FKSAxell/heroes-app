import React, { useEffect, useReducer } from "react";
import { AuthContext } from "./auth/AuthContext.js";
import { authReducer } from "./auth/authReducer.js";
import { AppRouter } from "./routers/AppRouter.js";

const init = () => {
  return JSON.parse(localStorage.getItem("user")) || { logged: false };
}
export const HeroesApp = () => {
  const [user, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user])

  //se podría aplicar el cambio a logged para cerrar sesión

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <AppRouter />
    </AuthContext.Provider>
  );
};

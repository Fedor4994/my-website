import { useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../constants";
import { User } from "../types/User";

import { googleLogout } from "@react-oauth/google";

export const useGoogleAuth = () => {
  const [loginData, setLoginData] = useState<User | null>(
    localStorage.getItem("login-data")
      ? JSON.parse(localStorage.getItem("login-data") || "")
      : null
  );

  const login = async ({ token }: { token: string }) => {
    const { data } = await axios.post<User>(
      `${API_BASE_URL}/users/google-login`,
      {
        token,
      }
    );

    setLoginData(data);
    localStorage.setItem("login-data", JSON.stringify(data));
  };

  const logout = () => {
    localStorage.removeItem("login-data");
    setLoginData(null);
    googleLogout();
  };

  return { loginData, logout, login };
};

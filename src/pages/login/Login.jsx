// import React/Hook/Router...
import React from "react";
import { Navigate } from "react-router-dom";

// import CUSTOM HOOK
import useLocalStorage from "../../hooks/use-local-storage";

// import component
import FormLogin from "./FormLogin";

// function Component
const Login = function () {
  // dùng Custom Hook làm việc với Local Storage
  const { get } = useLocalStorage();

  // lấy username từ Local Storage
  const username = get("username");

  // return
  return (
    <div className="bg-light min-vh-100 p-5">
      {username ? <Navigate to="/" /> : <FormLogin />}
    </div>
  );
};

export default Login;

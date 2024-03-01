// import React/Hook/Router...
import React from "react";
import { Outlet, useNavigate, Navigate } from "react-router-dom";

// import CUSTOM HOOK
import useLocalStorage from "../../hooks/use-local-storage";

// import component
import Header from "./Header";
import Sidebar from "./Sidebar";

////////////////////
// function Component
function Layout() {
  // dùng điều hướng
  const navigate = useNavigate();

  // dùng Custom Hook làm việc với Local Storage
  const { get, remove } = useLocalStorage();

  // lấy username từ Local Storage
  const username = get("username");

  // function xử lý LOGOUT
  const logoutHandler = function () {
    // xóa username ở Local Storage
    remove("username");

    // điều hướng đến trang login
    return navigate("/login");
  };

  // render dashboard
  const dashboard = (
    <div className="container-fluid">
      {/* header */}
      <Header />

      {/* dashboard */}
      <div className="row" style={{ minHeight: "95vh" }}>
        {/* Sidebar */}
        <div className="col-2 border border-light border-2 p-3">
          <Sidebar onLogout={logoutHandler} />
        </div>

        {/* content of each page */}
        <div className="col-10 border border-light border-2 px-4 py-3">
          <main>
            <Outlet
            // context={{ username, setUsername }}
            />
          </main>
        </div>
      </div>
    </div>
  );

  // return
  return username ? dashboard : <Navigate to="/login" />;
}

export default Layout;

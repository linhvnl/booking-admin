// import React/Hook/Router...
import React from "react";
import SidebarItem from "./SidebarItem";

// function Component
const Sidebar = function (props) {
  // list thông tin để render sidebar
  const dummySidebar = [
    {
      title: "Dashboard",
      icon: "fas fa-th-large",
      route: "/",
    },
    {
      title: "Users",
      icon: "far fa-user",
      route: "/users",
    },
    {
      title: "Hotels",
      icon: "fas fa-store-alt",
      route: "/hotels",
    },
    {
      title: "Rooms",
      icon: "far fa-credit-card",
      route: "/rooms",
    },
    {
      title: "Transactions",
      icon: "fas fa-truck",
      route: "/transactions",
    },
    {
      title: "New Hotel",
      icon: "fas fa-store-alt",
      route: "/hotel-new",
    },
    {
      title: "New Room",
      icon: "far fa-credit-card",
      route: "/room-new",
    },
    {
      title: "Logout",
      icon: "fas fa-sign-out-alt",
      route: null,
      onLogout: props.onLogout,
    },
  ];

  // return
  return (
    <nav className="">
      <ul className="list-unstyled">
        <li className="text-secondary fw-bold mb-3">
          MAIN
          <ul className="list-unstyled">
            <SidebarItem item={dummySidebar[0]} />
          </ul>
        </li>

        <li className="text-secondary fw-bold mb-3">
          LISTS
          <ul className="list-unstyled">
            <SidebarItem item={dummySidebar[1]} />
            <SidebarItem item={dummySidebar[2]} />
            <SidebarItem item={dummySidebar[3]} />
            <SidebarItem item={dummySidebar[4]} />
          </ul>
        </li>

        <li className="text-secondary fw-bold mb-3">
          NEW
          <ul className="list-unstyled">
            <SidebarItem item={dummySidebar[5]} />
            <SidebarItem item={dummySidebar[6]} />
          </ul>
        </li>

        <li className="text-secondary fw-bold mb-3">
          USER
          <ul className="list-unstyled">
            <SidebarItem item={dummySidebar[7]} />
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;

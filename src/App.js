// import React/Hook/Router...
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// import component LAYOUT
import Layout from "./pages/layout/Layout";

// import component
// login
import Login from "./pages/login/Login.jsx";

// home
import HomeDashboard, {
  loader as loaderDashboard,
} from "./pages/home/HomeDashboard.jsx";

// users
import UsersDashboard, {
  loader as loaderUsers,
} from "./pages/users/UsersDashboard.jsx";

// hotels
import HotelsDashboard, {
  loader as loaderHotels,
} from "./pages/hotels/HotelsDashboard.jsx";
import HotelNewDashboard, {
  action as actionAddHotel,
} from "./pages/hotelNew/HotelNewDashboard.jsx";
import HotelEdit, {
  loader as loaderHotel,
  action as actionEditHotel,
} from "./pages/hotelEdit/HotelEdit.jsx";

// rooms
import RoomsDashboard, {
  loader as loaderRooms,
} from "./pages/rooms/RoomsDashboard.jsx";
import RoomNewDashboard, {
  loader as loaderHotelsName,
  action as actionAddRoom,
} from "./pages/roomNew/RoomNewDashboard.jsx";
import RoomEdit, {
  loader as loaderRoom,
  action as actionEditRoom,
} from "./pages/roomEdit/RoomEdit.jsx";

// transactions
import Transactions, {
  loader as loaderTransactions,
} from "./pages/transactions/Transactions.jsx";

//////////////////////
// router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      // home
      { index: true, element: <HomeDashboard />, loader: loaderDashboard },

      // users
      { path: "users", element: <UsersDashboard />, loader: loaderUsers },

      // hotels
      { path: "hotels", element: <HotelsDashboard />, loader: loaderHotels },
      {
        path: "hotel-new",
        element: <HotelNewDashboard />,
        action: actionAddHotel,
      },
      {
        path: "hotel-edit/:hotelID",
        element: <HotelEdit />,
        loader: loaderHotel,
        action: actionEditHotel,
      },

      // rooms
      { path: "rooms", element: <RoomsDashboard />, loader: loaderRooms },
      {
        path: "room-new",
        element: <RoomNewDashboard />,
        loader: loaderHotelsName,
        action: actionAddRoom,
      },
      {
        path: "room-edit/:roomID",
        element: <RoomEdit />,
        loader: loaderRoom,
        action: actionEditRoom,
      },

      // transactions
      {
        path: "transactions",
        element: <Transactions />,
        loader: loaderTransactions,
      },
    ],
  },
  { path: "/login", element: <Login /> },
]);

//////////////////////
// function component
function App() {
  return <RouterProvider router={router} />;
}

// export
export default App;

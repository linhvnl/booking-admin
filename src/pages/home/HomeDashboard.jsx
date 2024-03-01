// import React/Hook/Router...
import React from "react";
import { useLoaderData } from "react-router-dom";

// import component
import InfoBoard from "./InfoBoard";
import LastestTransactions from "./LastestTransactions";

// function Component
const HomeDashboard = function (props) {
  // data trả về từ Server
  const {
    numUsers,
    numTransactions,
    totalTransactions,
    balanceTransactions,
    lastestTransactions,
  } = useLoaderData();

  // return
  return (
    <>
      <InfoBoard
        data={{
          numUsers,
          numTransactions,
          totalTransactions,
          balanceTransactions,
        }}
      />
      <LastestTransactions transactions={lastestTransactions} />
    </>
  );
};

export default HomeDashboard;

/////////////////////////////
// LOADER
// hàm loader để lấy dữ liệu hiển thị Dashboard từ API
export async function loader({ request, params }) {
  // fetch dữ liệu
  return fetch(`${process.env.REACT_APP_API_ENDPOINT_ORIGIN}/admin/dashboard`);
}

// import React/Hook/Router...
import React from "react";
import { useLoaderData } from "react-router-dom";

// import component
import RoomsTable from "./RoomsTable";
import Pagination from "../UI/Pagination";

// function Component
const RoomsDashboard = function (props) {
  // data trả về từ Server
  const data = useLoaderData();

  // return
  return (
    <>
      <RoomsTable rooms={data.rooms} />
      <Pagination paginating={{ ...data }} />
    </>
  );
};

export default RoomsDashboard;

/////////////////////////////
// LOADER
// hàm loader để lấy dữ liệu hiển thị Dashboard từ API
export async function loader({ request, params }) {
  // quy định số documents trên 1 page
  const perPage = 9;

  // lấy search params động để fetch theo page
  const url = new URL(request.url);
  const page = url.searchParams.get("page") || 1;

  // tạo url động
  const urlFetch = `${process.env.REACT_APP_API_ENDPOINT_ORIGIN}/admin/rooms?perPage=${perPage}&page=${page}`;

  // fetch dữ liệu
  return fetch(urlFetch);
}

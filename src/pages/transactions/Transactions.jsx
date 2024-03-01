// import React/Hook/Router...
import React from "react";
import { useLoaderData } from "react-router-dom";

// import component
import TransactionsTable from "./TransactionsTable";
import Pagination from "../UI/Pagination";

// function Component
const Transactions = function () {
  // data trả về từ Server
  const data = useLoaderData();

  // return
  return (
    <>
      <TransactionsTable transactions={data.transactions} />
      <Pagination paginating={{ ...data }} />
    </>
  );
};

export default Transactions;

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
  const urlFetch = `${process.env.REACT_APP_API_ENDPOINT_ORIGIN}/admin/transactions?perPage=${perPage}&page=${page}`;

  // fetch dữ liệu
  return fetch(urlFetch);
}

// import React/Hook/Router...
import React from "react";

// import component
import LastestTransactionsRowContent from "./LastestTransactionsRowContent";

// function Component
const LatestTransactions = function (props) {
  // lấy dữ liệu từ props
  const transactions = props.transactions;

  // ------------- render row title
  const titleArr = [
    ["checkbox", "3%"],
    ["ID", "14%"],
    ["User", "12%"],
    ["Hotel", "18%"],
    ["Room", "8%"],
    ["Date", "14%"],
    ["Price", "8%"],
    ["Payment Method", "12%"],
    ["Status", "8%"],
    ["", "auto"],
  ];

  const renderRowTitle = titleArr.map(([title, width], i) => (
    <th
      scope="col"
      key={i}
      className="text-secondary px-0 py-3"
      style={{ width }}
    >
      <div className="text-secondary text-nowrap lh-1 border-end border-3 px-2">
        {title === "checkbox" ? (
          <div className="text-center">
            <input type="checkbox" name="transaction" value="all" />
          </div>
        ) : (
          title
        )}
      </div>
    </th>
  ));

  // return
  return (
    <div className="shadow p-4 my-4">
      {/* title */}
      <h4 className="text-secondary my-2">Lastest Transactions</h4>

      {/* table */}
      <div className="border border-2 rounded-top">
        <table
          className="table table-hover align-middle"
          style={{ tableLayout: "fixed" }}
        >
          {/* title */}
          <thead>
            <tr>{renderRowTitle}</tr>
          </thead>

          {/* content transactions */}
          <tbody>
            <LastestTransactionsRowContent transactions={transactions} />
          </tbody>
        </table>
      </div>

      {/* text hiển thị số lượng kết quả*/}
      <div className="d-flex justify-content-end align-items-baseline border border-2 border-top-0 rounded-bottom">
        <p className="text-secondary py-2 mb-0 me-4">1-8 of 8</p>
        <span className="fw-lighter px-3 py-2">{"<"}</span>
        <span className="fw-lighter px-3 py-2">{">"}</span>
      </div>
    </div>
  );
};

export default LatestTransactions;

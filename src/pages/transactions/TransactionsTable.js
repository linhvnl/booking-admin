// import React/Hook/Router...
import React from "react";

// import component
import TransactionsTableRowContent from "./TransactionsTableRowContent";

// function Component
const TransactionsTable = function (props) {
  // lấy dữ liệu từ props
  const transactions = props.transactions;

  // ------------- render row title
  const titleArr = [
    ["checkbox", "3%"],
    ["ID", "14%"],
    ["User", "10%"],
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
    <>
      {/* title */}
      <h4 className="text-secondary my-2">Transactions List</h4>

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
            <TransactionsTableRowContent transactions={transactions} />
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TransactionsTable;

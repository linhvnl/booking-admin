// import React/Hook/Router...
import React from "react";

// import component
import UsersTableRowContent from "./UsersTableRowContent";

// function Component
const UsersTable = function (props) {
  // lấy dữ liệu từ props
  const users = props.users;

  // ------------- render row title
  const titleArr = [
    ["checkbox", "3%"],
    ["ID", "20%"],
    ["Username", "15%"],
    ["Full Name", "15%"],
    ["Email", "15%"],
    ["Phone", "15%"],
    ["Admin", "12%"],
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
            <input type="checkbox" name="user" value="all" />
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
      {/* title - link "Add New */}
      <div className="d-flex justify-content-between align-items-baseline bd-highlight mb-2">
        <h4 className="text-secondary my-2">Users List</h4>
      </div>

      {/* table */}
      <div className="border border-2 rounded">
        <table
          className="table table-hover align-middle"
          style={{ tableLayout: "fixed" }}
        >
          {/* title */}
          <thead className="">
            <tr>{renderRowTitle}</tr>
          </thead>

          {/* content transactions */}
          <tbody>
            <UsersTableRowContent users={users} />
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UsersTable;

// import React/Hook/Router...
import React from "react";
import { Link } from "react-router-dom";

// import component
import RoomsTableRowContent from "./RoomsTableRowContent";

// function Component
const RoomsTable = function (props) {
  // lấy dữ liệu từ props
  const rooms = props.rooms;

  // ------------- render row title
  const titleArr = [
    ["checkbox", "2%"],
    ["ID", "14%"],
    ["Title", "22%"],
    ["Description", "22%"],
    ["Price", "7%"],
    ["Max People", "12%"],
    ["Action", "16%"],
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
            <input type="checkbox" name="room" value="all" />
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
        <h4 className="text-secondary my-2">Rooms List</h4>
        <Link to="/room-new" className="btn btn-outline-success p-1">
          Add New
        </Link>
      </div>

      {/* table */}
      <div className="border border-2 rounded-top">
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
            <RoomsTableRowContent rooms={rooms} />
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RoomsTable;

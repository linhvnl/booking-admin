// import React/Hook/Router...
import React from "react";
import { Link } from "react-router-dom";

// import component
import HotelsTableRowContent from "./HotelsTableRowContent";

// function Component
const HotelsTable = function (props) {
  // lấy dữ liệu từ props
  const hotels = props.hotels;

  // ------------- render row title
  const titleArr = [
    ["checkbox", "3%"],
    ["ID", "14%"],
    ["Name", "24%"],
    ["Type", "8%"],
    ["Title", "18%"],
    ["City", "12%"],
    ["Action", "14%"],
    ["", "auto"],
  ];

  const renderRowTitle = titleArr.map(([title, width], i) => (
    <th
      scope="col"
      key={i}
      className="text-secondary px-0 py-3"
      style={{ width }}
    >
      <div className="text-secondary lh-1 border-end border-3 px-2">
        {title === "checkbox" ? (
          <div className="text-center">
            <input type="checkbox" name="hotel" value="all" />
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
        <h4 className="text-secondary my-2">Hotels List</h4>
        <Link to="/hotel-new" className="btn btn-outline-success p-1">
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
            <HotelsTableRowContent hotels={hotels} />
          </tbody>
        </table>
      </div>
    </>
  );
};

export default HotelsTable;

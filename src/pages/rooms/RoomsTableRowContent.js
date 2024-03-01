// import React/Hook/Router...
import React from "react";
import { useNavigate } from "react-router-dom";

// import CUSTOM HOOK
import useHttpAdmin from "../../hooks/use-http-admin";

// function Component
const RoomsTableRowContent = function (props) {
  // lấy transactions từ props
  const rooms = props.rooms;

  // dùng Custom Hook để fetch to Server
  const { endPoints, customFetch } = useHttpAdmin();

  // dùng navigate điều hướng
  const navigate = useNavigate();

  // function xử lý Delete Room
  const handleDeleteRoom = function (roomID) {
    // confirmation
    const confirmMessage = window.confirm(
      "Are you sure you want to delete this room?"
    );

    // check confirmation
    if (!confirmMessage) return;

    // xử lý xóa => send request to Server
    console.log(roomID);
    customFetch({
      method: "POST",
      url: endPoints.fetchRoomDelete,
      bodyObj: { roomID },
      errFunc: (data) => {
        alert(data.message);
      },
      successFunc: (data) => {
        // tải lại trang để update dữ liệu Rooms sau khi xóa
        return navigate("/rooms");
      },
    });
  };

  // render row transactions
  const renderRowRooms = rooms?.map((item, i) => {
    // style className chung cho cell trong table
    const classGeneral = "text-secondary px-2 py-3 text-nowrap overflow-hidden";
    const style = { textOverflow: "ellipsis" };

    // render 1 cell
    const tdCell = (content) => (
      <td className={classGeneral} style={style}>
        {content}
      </td>
    );

    // return render content
    return (
      <tr key={i} className="text-secondary">
        <th scope="row" className={classGeneral + " fw-normal"}>
          <div className="text-center">
            <input type="checkbox" name="transaction" value="" />
          </div>
        </th>
        {tdCell(item._id)}
        {tdCell(item.title)}
        {tdCell(item.desc)}
        {tdCell(item.price)}
        {tdCell(item.maxPeople)}
        <td className={classGeneral + " align-middle"}>
          {/* DELETE button */}
          <button
            className="btn btn-outline-danger p-1 me-3"
            style={{ borderStyle: "dotted" }}
            onClick={handleDeleteRoom.bind(null, item._id)}
          >
            Delete
          </button>

          {/* EDIT button */}
          <button
            className="btn btn-outline-warning px-2 py-1"
            onClick={() => navigate(`/room-edit/${item._id}`)}
          >
            Edit
          </button>
        </td>
        <td className="px-5"></td>
      </tr>
    );
  });

  // return
  return <>{renderRowRooms}</>;
};

export default RoomsTableRowContent;

// import React/Hook/Router...
import React from "react";

// import CUSTOM HOOK
import useIntLanguage from "../../hooks/use-intlanguage";

// function Component
const InfoBoard = function (props) {
  // lấy dữ liệu từ props
  const { numUsers, numTransactions, totalTransactions, balanceTransactions } =
    props.data;

  // dùng Custom Hook để format number
  const { toUseIntlNumber } = useIntLanguage();

  // list thông tin để render info board
  const dummyInfoBoard = [
    {
      title: "USERS",
      data: toUseIntlNumber(numUsers),
      icon: "far fa-user",
      color: "#f03e3e",
      backgroundColor: "#ffc9c9",
    },
    {
      title: "ORDERS",
      data: toUseIntlNumber(numTransactions),
      icon: "fa fa-shopping-cart",
      color: "#f08c00",
      backgroundColor: "#fff3bf",
    },
    {
      title: "EARNINGS",
      data: "$ " + toUseIntlNumber(totalTransactions),
      icon: "fa fa-usd",
      color: "#2f9e44",
      backgroundColor: "#b2f2bb",
    },
    {
      title: "BALANCE",
      data: "$ " + toUseIntlNumber(balanceTransactions),
      icon: "far fa-plus-square",
      color: "#9c36b5",
      backgroundColor: "#eebefa",
    },
  ];

  // render list info board
  const list = dummyInfoBoard.map((item, i) => {
    return (
      <div key={i} className="col">
        <div className="shadow rounded-4 p-3">
          <h5 className="text-secondary fw-bold mb-4">{item.title}</h5>
          <p className="fs-2 mb-0">{item.data}</p>
          <div className="text-end">
            <i
              className={`${item.icon} rounded p-2`}
              style={{
                width: "30px",
                color: item.color,
                backgroundColor: item.backgroundColor,
              }}
            ></i>
          </div>
        </div>
      </div>
    );
  });

  // return
  return <div className="row row-cols-4 g-4">{list}</div>;
};

export default InfoBoard;

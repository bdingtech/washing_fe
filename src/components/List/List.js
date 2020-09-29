import React from "react";
import { Toast } from "antd-mobile";
import axios from "axios";
import "./List.less";

function List() {
  const handelGopayClick = (e) => {
    const type = e.currentTarget.getAttribute("data-type");
    Toast.loading("正在获取机器状态...", 0);
    axios.get("/api/getStatus").then((res) => {
      Toast.hide();
      if (res.data.code === 200) {
        Toast.loading("状态正常，正在发起支付...", 10);
        axios
          .get("/api/getDealUrl", {
            params: {
              type: type,
            },
          })
          .then((res) => {
            console.log(res);
            if (res.data) {
              window.location.href = `/api/getDealUrl/?type=${type}`;
            } else {
              Toast.fail("未知错误", 5);
            }
          });
      } else {
        Toast.fail(res.data.stat, 5);
      }
    })
  }
  return (
    <div id="list">
      <div className="list-container">
        <div
          className="list-item"
          onClick={handelGopayClick}
          data-type="big"
        >
          <div className="title">大物洗</div>
          <div className="icon"></div>
        </div>
        <div
          className="list-item"
          onClick={handelGopayClick}
          data-type="mid"
        >
          <div className="title">标准洗</div>
          <div className="icon"></div>
        </div>
        <div
          className="list-item"
          onClick={handelGopayClick}
          data-type="small"
        >
          <div className="title">快洗</div>
          <div className="icon"></div>
        </div>
        <div
          className="list-item"
          onClick={handelGopayClick}
          data-type="normal"
        >
          <div className="title">单脱水</div>
          <div className="icon"></div>
        </div>
      </div>
    </div>
  );
}
export default List;

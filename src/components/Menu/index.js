import React from "react";
import { Dropdown, Menu } from "antd";
import { DashOutlined } from "@ant-design/icons";
import './index.less'
export default function Index(props) {
  const menu = (
    <Menu
      items={[
        {
          label:'添加页面',
          key: "0",
        },
        {
          label: '复制一个页面', 
          key: "1",
        },
        {
          label: '删除一个页面',
          key: "2",
        },
        {
          label: "添加转场",
          key: "3",
        },
        {
          label: "备注",
          key: "4",
        }
      ]}
    />
  );
  return (
    <div id={props.id||''} className={props.className|| ''} >

      <Dropdown overlay={menu} trigger={["click"]} >
         {props.wrapper ? <props.wrapper /> : <span className="icon-wrapper">
             <DashOutlined />
             </span>}
      </Dropdown>
    </div>
  );
}

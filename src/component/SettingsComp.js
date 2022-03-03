import React, { useEffect, useState } from "react";
import { Content } from "antd/es/layout/layout";
import { Radio } from "antd";
import { userApi } from "./Api";
const SettingsComp = () => {
  const [value, setValue] = useState("");
  useEffect(() => {
    userApi(value);
    console.log("hassan");
  }, [value]);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
    // userApi(value)
  };

  console.log("radio value", value);
  return (
    <Content
      className="site-layout"
      style={{ padding: "0 50px", marginTop: 64 }}
    >
      <div>helooooooooooooooooooooo</div>
      <Radio.Group onChange={onChange} value={value}>
        <Radio value={"CH"}>CH</Radio>
        <Radio value={"ES"}>ES</Radio>
        <Radio value={"FR"}>FR</Radio>
        <Radio value={"GB"}>GB</Radio>
      </Radio.Group>
    </Content>
  );
};
export default SettingsComp;

import React, { useEffect, useState, useContext } from "react";
import { Content } from "antd/es/layout/layout";
import { Col, Radio, Row } from "antd";
import { userApi } from "./Api";
import { userContext } from "../App";
import Title from "antd/es/typography/Title";

const SettingsComp = () => {
  const { setNationality } = useContext(userContext);
  const [value, setValue] = useState("");

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
    setNationality(e.target.value);
  };

  console.log("radio value", value);
  return (
    <Content
      className="site-layout"
      style={{ padding: "0 50px", marginTop: 64 }}
    >
      <Row justify="center" align="middle">
        <Col span={24}>
          <Title>Select Nationality</Title>
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={"CH"}>CH</Radio>
            <Radio value={"ES"}>ES</Radio>
            <Radio value={"FR"}>FR</Radio>
            <Radio value={"GB"}>GB</Radio>
          </Radio.Group>
        </Col>
      </Row>
    </Content>
  );
};
export default SettingsComp;

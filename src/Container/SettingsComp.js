import React, { useState } from "react";
import { Content } from "antd/es/layout/layout";
import { Col, Layout, Radio, Row } from "antd";
import Title from "antd/es/typography/Title";
import { useDispatch, useSelector } from "react-redux";
import { setNationality } from "../Redux/Actions/UserDataActions";
import NavBar from "../Common/NavBar";

const SettingsComp = () => {
  const dispatch = useDispatch();
  const nat = useSelector((state) => state.userInfo.nationality);

  const [value, setValue] = useState(nat);

  const onChange = (e) => {
    setValue(e.target.value);
    dispatch(setNationality(e.target.value));
  };

  console.log("radio value", value);
  return (
    <>
      <NavBar />
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
    </>
  );
};
export default SettingsComp;

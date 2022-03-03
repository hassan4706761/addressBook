import React, { useEffect, useState, useContext } from "react";
import { userApi } from "./Api";
import InfiniteScroll from "react-infinite-scroll-component";
import { Card, Col, Row, Layout, Menu, Breadcrumb } from "antd";
import UserCard from "./UserCard";
import UserModal from "./UserModal";
import "../styles/userPage.less";
import { userContext } from "../App";

const { Header, Content, Footer } = Layout;

const GetUsers = () => {
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [count, setCount] = useState(10);
  const [visibleModal, setVisibleModal] = useState(false);
  const [id, setId] = useState("");
  const [location, setLocation] = useState({
    streetNum: "",
    streetName: "",
    city: "",
    state: "",
    postcode: "",
    cell: "",
    phone: "",
  });
  const { nationality, searchText } = useContext(userContext);
  console.log("===============>////////", searchText);

  useEffect(() => {
    userApi(setData, count, data, setHasMore, nationality);
  }, []);

  const callUsers = () => {
    setTimeout(() => {
      userApi(setData, count, data, setHasMore);
    }, 200);
  };
  const filteredPersons = data.filter((person) => {
    return (
      person.name?.first.toLowerCase().includes(searchText.toLowerCase()) ||
      person.name?.last.toLowerCase().includes(searchText.toLowerCase())
    );
  });
  return (
    <Content
      className="site-layout"
      style={{ padding: "0 50px", marginTop: 64 }}
    >
      <InfiniteScroll
        next={callUsers}
        hasMore={hasMore}
        loader={<h4>loading...</h4>}
        dataLength={data.length}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>End of users catalog</b>
          </p>
        }
      >
        <Row gutter={10} style={{ padding: "30px" }}>
          {searchText === ""
            ? data.map((item, index) => {
                return (
                  <Col key={index} span={4}>
                    <UserModal
                      visible={visibleModal}
                      onCancel={() => setVisibleModal(false)}
                      id={id}
                      streetName={location.streetName}
                      streetNumber={location.streetNum}
                      cell={location.cell}
                      city={location.city}
                      state={location.state}
                      phone={location.phone}
                    />

                    <UserCard
                      image={item?.picture?.large}
                      fname={item?.name?.first}
                      lname={item?.name?.last}
                      username={item?.login?.username}
                      email={item?.email}
                      onCLick={() => {
                        setVisibleModal(true);
                        setId(item?.login?.uuid);
                        setLocation({
                          streetNum:
                            (item?.location?.street?.number).toString(),
                          streetName: item?.location?.street?.name,
                          city: item?.location?.city,
                          state: item?.location?.state,
                          postcode: (item?.location?.postcode).toString(),
                          cell: item?.cell,
                          phone: item?.phone,
                        });
                      }}
                    />
                  </Col>
                );
              })
            : filteredPersons.map((item, index) => {
                return (
                  <Col key={index} span={4}>
                    <UserModal
                      visible={visibleModal}
                      onCancel={() => setVisibleModal(false)}
                      id={id}
                      streetName={location.streetName}
                      streetNumber={location.streetNum}
                      cell={location.cell}
                      city={location.city}
                      state={location.state}
                      phone={location.phone}
                    />

                    <UserCard
                      image={item?.picture?.large}
                      fname={item?.name?.first}
                      lname={item?.name?.last}
                      username={item?.login?.username}
                      email={item?.email}
                      onCLick={() => {
                        setVisibleModal(true);
                        setId(item?.login?.uuid);
                        setLocation({
                          streetNum:
                            (item?.location?.street?.number).toString(),
                          streetName: item?.location?.street?.name,
                          city: item?.location?.city,
                          state: item?.location?.state,
                          postcode: (item?.location?.postcode).toString(),
                          cell: item?.cell,
                          phone: item?.phone,
                        });
                      }}
                    />
                  </Col>
                );
              })}
        </Row>
      </InfiniteScroll>
    </Content>
  );
};

export default GetUsers;

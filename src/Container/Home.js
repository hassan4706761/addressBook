import React, { useEffect, useRef, useState } from "react";
import { Col, Row, Layout } from "antd";
import UserCard from "../Component/UserCard";
import UserModal from "../Component/UserModal";
import "../Styles/userPage.less";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import ObserverDiv from "../Component/ObserverDiv";
import { getUserData } from "../Redux/Actions/UserDataActions";
import Nav from "../Common/Nav";

const { Content } = Layout;

const Home = () => {
  const [visibleModal, setVisibleModal] = useState(false);
  const [id, setId] = useState("");
  const [data, setData] = useState([]);
  const [location, setLocation] = useState({
    streetNum: "",
    streetName: "",
    city: "",
    state: "",
    postcode: "",
    cell: "",
    phone: "",
  });
  const dispatch = useDispatch();
  const PageEnd = useRef();

  const userInfo = useSelector((state) => state.userInfo);
  const { pagination, nationality, userData, search, isLoading } = userInfo;
  const { pageNum, perPage } = pagination;

  console.log("===============>////////", userInfo);

  //===========================================================================

  useEffect(() => {
    if (pageNum <= 19) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            dispatch(getUserData(pageNum, nationality, perPage));
          }
        },
        { threshold: 1 }
      );
      if (PageEnd.current) {
        observer.observe(PageEnd.current);
      }
      return () => {
        if (PageEnd.current && pageNum <= 20) {
          observer.unobserve(PageEnd.current);
        }
      };
    }
  }, [PageEnd, nationality, pageNum]);

  //================================================

  useEffect(() => {
    setData([...data, ...userData]);
  }, [userData]);

  //================================================

  const handleDisplayModal = (item) => {
    setVisibleModal(true);
    setId(item?.login?.uuid);
    setLocation({
      streetNum: (item?.location?.street?.number).toString(),
      streetName: item?.location?.street?.name,
      city: item?.location?.city,
      state: item?.location?.state,
      postcode: (item?.location?.postcode).toString(),
      cell: item?.cell,
      phone: item?.phone,
    });
  };

  //======================================================

  return (
    <Layout>
      <Nav />
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        <Row gutter={10} style={{ padding: "30px" }}>
          {search === ""
            ? userData &&
              data.map((item, index) => {
                return (
                  <Col key={index} span={4} style={{ height: "420px" }}>
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
                      data-testid="userCard"
                      image={item?.picture?.large}
                      firstName={item?.name?.first}
                      lastName={item?.name?.last}
                      username={item?.login?.username}
                      email={item?.email}
                      index={index}
                      onCLick={() => handleDisplayModal(item)}
                    />
                  </Col>
                );
              })
            : data
                .filter((person) => {
                  return (
                    person.name?.first
                      .toLowerCase()
                      .includes(search?.toLowerCase()) ||
                    person.name?.last
                      .toLowerCase()
                      .includes(search?.toLowerCase())
                  );
                })
                .map((item, index) => {
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
                        data-testid="userCard"
                        image={item?.picture?.large}
                        firstName={item?.name?.first}
                        lastName={item?.name?.last}
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
        <ObserverDiv isLoading={isLoading} setObserve={PageEnd} />
      </Content>
    </Layout>
  );
};

export default Home;

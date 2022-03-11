import React, { useEffect, useRef, useState } from "react";
import { Col, Row, Layout } from "antd";
import UserCard from "../component/UserCard";
import UserModal from "../component/UserModal";
import "../styles/userPage.less";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import ObserverDiv from "../component/ObserverDiv";
import { getUserData } from "../Redux/Actions/UserDataActions";

const { Content } = Layout;

const GetUsers = () => {
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
  const userDatas = useSelector((state) => state.userInfo);
  const { pageNum, nationality, result, userData, search, isLoading } =
    userDatas;

  console.log("===============>////////", userDatas);

  useEffect(() => {
    dispatch(getUserData(pageNum, nationality, result));
  }, [nationality]);

  useEffect(() => {
    setData([...data, ...userData]);
  }, [userData]);

  //===========================================================================
  const PageEnd = useRef();
  useEffect(() => {
    if (pageNum <= 19) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            dispatch(getUserData(pageNum, nationality, result));
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

  const filteredPersons = data?.filter((person) => {
    return (
      person.name?.first.toLowerCase().includes(search?.toLowerCase()) ||
      person.name?.last.toLowerCase().includes(search?.toLowerCase())
    );
  });

  return (
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
                    image={item?.picture?.large}
                    fname={item?.name?.first}
                    lname={item?.name?.last}
                    username={item?.login?.username}
                    email={item?.email}
                    index={index}
                    onCLick={() => {
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
                        streetNum: (item?.location?.street?.number).toString(),
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
  );
};

export default GetUsers;

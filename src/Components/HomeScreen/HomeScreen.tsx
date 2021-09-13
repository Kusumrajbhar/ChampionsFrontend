// import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { HomeScreenImages } from "../../Constants/HomeScreenImages";
import HomeScreenCard from "./HomeScreenCard";
import { neoLogo } from "../../Assests/Images/neologo";
import "../../Styles/homeScreenStyles.scss";
import { useHistory } from "react-router-dom";

function HomeScreen() {
  const history = useHistory();
  const handleClick = () => {
    history.push("./login");
  };
  return (
    <>
      <div className="logo-next ml-2">
        <img src={neoLogo} width={150} className="mt-2" />
        <button className="next mr-2" onClick={handleClick}>
          Next {">>"}
        </button>
      </div>

      <Container>
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <h1 className="home-heading">
              <span className="champions">Champions</span> of the Week!!!
            </h1>
            <div className="home-card-wrapper">
              {HomeScreenImages.map((item) => {
                return (
                  <HomeScreenCard key={item.id} id={item.id} name={item.name} />
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default HomeScreen;

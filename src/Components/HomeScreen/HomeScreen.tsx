import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { HomeScreenImages } from "../../Constants/HomeScreenImages";
import HomeScreenCard from "./HomeScreenCard";
import "../../Styles/homeScreenStyles.scss";

function HomeScreen() {
  return (
    <>
      <Container>
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <h2 className="home-heading">Champions</h2>
            <div className="card-wrapper">
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

import { Component } from "react";
import { Col, Jumbotron, Row } from "reactstrap";
import logo from '../../images/MVLogo.png'

class NavBar extends Component {
  render() {
    return (
      <Jumbotron className="jumbotron-fluid pb-0 pt-2">
        <div className="container-fluid">
          <Row>
            <div className="col-3 col-md-2 col-xl-2 align-self-center">
              <a href="localhost:3000">
                <img src={logo} className="img-fluid float-left" alt="Mangia Verdure Logo" />
              </a>
            </div>
            <Col className="col bottom-column align-self-center pr-0">
              <h1 className="display-3 title-font">Mangia Verdure</h1>
              <p className="lead title-font align-text-bottom d-none d-md-inline">Vegetarian &amp; Vegan Flavor Planning</p>
            </Col>
          </Row>
        </div>
      </Jumbotron>
    );
  }
}

export default NavBar;
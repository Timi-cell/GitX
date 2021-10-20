import React, { Component } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#" className="text-white">
            <h1>Git-X</h1>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="text-white"
          />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="text-end text-white"
          >
            <Nav className="ms-auto">
              <Nav.Link
                className="text-white"
                href="#"
                data-bs-target="#exampleModal"
                data-bs-toggle="modal"
              >
                About Git-X
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content bg-dark">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  About Git-X
                </h5>
                <button
                  type="button"
                  className="btn-close bg-light"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  Git-X is a web application that gives users the opportunity
                  and interface to search an existing github user and get more
                  details on the github user’s account like full-name, github
                  username, number of repositories, number of followers etc.
                </p>
                <p>Developed by Aluko Oluwatimilehin.</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </Navbar>
    );
  }
}

export default Header;

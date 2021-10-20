import React, { Component } from "react";
import { Nav } from "react-bootstrap";
class Body extends Component {
  render() {
    const {
      name,
      username,
      picture,
      date_joined,
      bio,
      repos,
      followers,
      following,
      location,
      twitter_username,
      blog,
      account_address,
    } = this.props.data;

    return (
      <section className="bodyContainer mt-3 d-md-flex w-100  justify-content-between align-items-start">
        <img
          src={picture || "./images/github-dark.png"}
          alt="profile pic"
          className="image mb-5"
        />
        <div className="contents p-1">
          <div className="top d-md-flex justify-content-between align-items-center">
            <h3>{name || "This user does not exist."}</h3>
            <p>Joined {date_joined || "---"}</p>
          </div>
          <p className="mt-2">{username || "---"}</p>
          <p>{bio || "This profile has no bio."}</p>
          <div className="cutout d-sm-flex justify-content-between mt-5 p-4">
            <div>
              <p>Repos</p>
              <h4>{repos || "---"}</h4>{" "}
            </div>
            <div>
              <p>Followers</p>
              <h4>{followers || "---"}</h4>{" "}
            </div>
            <div>
              <p>Following</p>
              <h4>{following || "---"}</h4>{" "}
            </div>
          </div>
          <div className="social d-lg-flex mt-4  justify-content-between align-items-center  p-1">
            <div>
              <p className="d-flex  align-items-center">
                <i className="fas fa-map-marker-alt"></i>{" "}
                <span>{location || "---"}</span>
              </p>
              <p className="d-flex  align-items-center">
                <i className="fas fa-paperclip"></i>{" "}
                <span>
                  <Nav.Link href={blog || "#"} className="text-white p-0 m-0">
                    Visit Blog
                  </Nav.Link>
                </span>
              </p>
            </div>
            <div>
              <p className="d-flex  align-items-center">
                <i className="fab fa-twitter"></i>{" "}
                <span>{twitter_username || "---"}</span>
              </p>
              <p className="d-flex  align-items-center">
                <i className="fab fa-github"></i>
                <span>
                  <Nav.Link
                    href={account_address || "#"}
                    className="text-white p-0 m-0"
                  >
                    {`Go to GitHub Page`}
                  </Nav.Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Body;

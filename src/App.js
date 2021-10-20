import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import Input from "./components/input";
import Body from "./components/body";
import { Container } from "react-bootstrap";

const GITHUB_API = "https://api.github.com/users";
class App extends Component {
  state = {
    name: "---",
    username: "",
    picture: "./images/github-dark.png",
    date_joined: "---",
    bio: "---",
    repos: 0,
    followers: 0,
    following: 0,
    location: "---",
    twitter_username: "---",
    blog: "---",
    account_address: "",
  };
  connectGithub(username) {
    fetch(`${GITHUB_API}/${username}`, { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        const {
          name,
          login,
          avatar_url,
          created_at,
          bio,
          public_repos,
          followers,
          following,
          location,
          twitter_username,
          blog,
          html_url,
        } = data;

        const date = new Date(created_at);

        this.setState({
          name,
          username: login,
          picture: avatar_url,
          date_joined: date.toLocaleString(),
          bio,
          repos: public_repos,
          followers,
          following,
          location,
          twitter_username,
          blog,
          account_address: html_url,
        });
      });
  }
  handleSubmit = () => {
    // connect to Github
    this.connectGithub(this.state.username);
  };

  handleInput = ({ value }) => {
    const username = value;
    this.setState({ username });
  };

  render() {
    return (
      <div>
        <Header />
        <Container className="d-flex flex-column justify-content-center align-items-center">
          <Input
            onSubmit={this.handleSubmit}
            handleInput={this.handleInput}
            username={this.state.username}
          />
          <Body data={this.state} />
        </Container>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

class Input extends Component {
  render() {
    const { onSubmit, handleInput, username } = this.props;
    return (
      <InputGroup className="mt-5 input">
        <FormControl
          placeholder="Search Username..."
          value={username}
          onChange={(event) => handleInput(event.target)}
        />
        <Button
          as="input"
          value="Submit"
          variant="outline-primary"
          type="submit"
          className="ms-2 text-white"
          onClick={onSubmit}
        />
      </InputGroup>
    );
  }
}

export default Input;

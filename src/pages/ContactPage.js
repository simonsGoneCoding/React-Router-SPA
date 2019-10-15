import React from "react";
import "../styles/ContactPage.css";
import { Prompt } from "react-router-dom";

class ContactPage extends React.Component {
  state = {
    value: ""
  };

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      value: ""
    });
  };

  render() {
    return (
      <div className="contact">
        <form onSubmit={this.handleSubmit}>
          <h3>Pop us a message!</h3>
          <textarea
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Write here"
          ></textarea>
          <button>Send</button>
        </form>
        <Prompt
          when={this.state.value} //empty string will give false and Prompt will not work
          message="Your form is not compleated! Do you really want to leave? "
        />
      </div>
    );
  }
}

export default ContactPage;

import React from "react";
import "../styles/ContactPage.css";

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
      </div>
    );
  }
}

export default ContactPage;

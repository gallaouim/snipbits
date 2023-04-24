import addToMailchimp from "gatsby-plugin-mailchimp";
import React from "react";

export default class mailchimp extends React.Component {
  constructor() {
    super();
    this.state = { email: "", result: null };
  }

  _handleSubmit = async (e) => {
    e.preventDefault();
    const result = await addToMailchimp(this.state.email);
    if (result.result === "success") {
      alert("You are subscribed to our Newsletter");
    } else {
      alert("Something Wrong happened , Please try later");
    }
    this.setState({ result: result });
  };

  handleChange = (event) => {
    this.setState({ email: event.target.value });
  };

  render() {
    return (
      <form
        onSubmit={this._handleSubmit}
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        <label>
          Email{"    "}
          <input
            style={{ border: "2px black solid" }}
            id="outlined-email-input"
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            variant="outlined"
            onChange={this.handleChange}
          />
        </label>
        <br />
        <button
          style={{ backgroundColor: "#0377bd", color: "white" }}
          variant="contained"
          color="primary"
          label="Submit"
          type="submit"
        >
          Subscribe
        </button>
      </form>
    );
  }
}

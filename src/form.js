import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
        <div className="container myform">
        <div className="row">
        <div className="col s12 l4">
        <h3 className="teal-text">Get In Touch</h3>
        <p >You got a problem?Send it to us!</p>
          </div>
          <div className="col s12 l6 right">
          <form
        onSubmit={this.submitForm}
        action="https://formspree.io/f/mrgoabqb"
        method="POST"
      >
          <label>Email:</label>
        <input type="email" name="email" />
        <label>Message:</label>
        <input type="text" name="message" />
        {status === "SUCCESS" ? <p className="green z-depth-2 white-text center">Thanks!</p> : <button className="btn">Submit</button>}
        {status === "ERROR" && <p className="red z-depth-2 white-text center">Ooops! There was an error.</p>}
      </form>
          </div>
        </div>

      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
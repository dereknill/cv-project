import { Component } from "react";

class Personal extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <fieldset>
        <legend>Personal Information</legend>
        <input type='text' placeholder='First Name'></input>
        <input type='text' placeholder='Last Name'></input>
        <input type='text' placeholder='Title'></input>
        <input type='text' placeholder='Address'></input>
        <input type='tel' placeholder='Phone Number'></input>
        <input type='email' placeholder='E-Mail'></input>
        <textarea placeholder='Description' cols='1000' rows='5'></textarea>
      </fieldset>
    );
  }
}

export default Personal;

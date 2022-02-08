import { Component } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

class Personal extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { personalObject, handleChange, handlePhoneChange } = this.props;
    return (
      <fieldset>
        <legend>Personal Information</legend>
        <input
          type='text'
          placeholder='First Name'
          name='firstName'
          onChange={handleChange}
          value={personalObject.firstName}
          index='0'
        ></input>
        <input
          type='text'
          placeholder='Last Name'
          name='lastName'
          onChange={handleChange}
          value={personalObject.lastName}
          index='0'
        ></input>
        <input
          type='text'
          placeholder='Title'
          name='title'
          onChange={handleChange}
          value={personalObject.title}
          index='0'
        ></input>
        <input
          type='text'
          placeholder='Address'
          name='address'
          onChange={handleChange}
          value={personalObject.address}
          index='0'
        ></input>
        <PhoneInput
          placeholder='Phone Number'
          className='phone-input'
          country={"us"}
          onChange={(phone) => handlePhoneChange(phone)}
          value={personalObject.phone}
        ></PhoneInput>
        <input
          type='email'
          placeholder='E-Mail'
          name='email'
          onChange={handleChange}
          value={personalObject.email}
          index='0'
        ></input>
        <textarea
          placeholder='Description'
          cols='1000'
          rows='5'
          name='description'
          onChange={handleChange}
          value={personalObject.description}
          index='0'
        ></textarea>
      </fieldset>
    );
  }
}

export default Personal;

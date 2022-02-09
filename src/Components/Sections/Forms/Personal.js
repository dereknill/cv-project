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
          index={personalObject.index}
        ></input>
        <input
          type='text'
          placeholder='Last Name'
          name='lastName'
          onChange={handleChange}
          value={personalObject.lastName}
          index={personalObject.index}
        ></input>
        <input
          type='text'
          placeholder='Title'
          name='title'
          onChange={handleChange}
          value={personalObject.title}
          index={personalObject.index}
        ></input>
        <input
          type='text'
          placeholder='Street Address'
          name='address'
          onChange={handleChange}
          value={personalObject.address}
          index={personalObject.index}
        ></input>
        <input
          type='text'
          placeholder='City'
          name='city'
          onChange={handleChange}
          value={personalObject.city}
          index={personalObject.index}
        ></input>
        <input
          type='text'
          placeholder='State'
          name='state'
          onChange={handleChange}
          value={personalObject.state}
          index={personalObject.index}
        ></input>
        <PhoneInput
          placeholder='Phone Number'
          inputClass='phone-input'
          containerClass='phone-input-pos'
          country={"us"}
          onlyCountries={["us"]}
          disableCountryCode={true}
          onChange={(phone) => handlePhoneChange(phone)}
          value={personalObject.phone}
          index={personalObject.index}
        ></PhoneInput>
        <input
          type='email'
          placeholder='E-Mail'
          name='email'
          onChange={handleChange}
          value={personalObject.email}
          index={personalObject.index}
        ></input>
        <textarea
          placeholder='Description'
          cols='1000'
          rows='5'
          name='description'
          onChange={handleChange}
          value={personalObject.description}
          index={personalObject.index}
        ></textarea>
      </fieldset>
    );
  }
}

export default Personal;

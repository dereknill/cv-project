import { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  formatPhone(number) {
    let newString = "";
    if (number.length < 1) {
      return null;
    }
    for (let i = 0; i < 10; i++) {
      if (number[i]) {
        newString += number[i];
      } else {
        newString += " ";
      }
    }
    return `(${newString[0]}${newString[1]}${newString[2]})${newString[3]}${newString[4]}${newString[5]}-${newString[6]}${newString[7]}${newString[8]}${newString[9]}`;
  }

  render() {
    const personalInfo = this.props.personalInfo;

    return (
      <div className='preview-header'>
        <h1>
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        <h2>{personalInfo.title}</h2>
        <h3>{personalInfo.address}</h3>
        <h3>
          {personalInfo.city}, {personalInfo.state}
        </h3>
        <h3>{personalInfo.email}</h3>
        <h3>{this.formatPhone(personalInfo.phone)}</h3>
      </div>
    );
  }
}

export default Header;

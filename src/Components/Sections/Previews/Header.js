import { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.props = props;
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
        <h3>{personalInfo.phone}</h3>
        <h3>{personalInfo.email}</h3>
      </div>
    );
  }
}

export default Header;

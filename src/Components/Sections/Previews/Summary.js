import { Component } from "react";

class Summary extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const enabled = this.props.personalInfo.description.length > 0;
    if (!enabled) {
      return null;
    }
    return (
      <div className='preview-summary'>
        <h2>SUMMARY</h2>
        <hr></hr>
        <h3>{this.props.personalInfo.description}</h3>
      </div>
    );
  }
}

export default Summary;

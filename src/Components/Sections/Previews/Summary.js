import { Component } from "react";

class Summary extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
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

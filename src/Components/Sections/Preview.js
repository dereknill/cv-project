import { Component } from "react";
import Header from "./Previews/Header";
import Summary from "./Previews/Summary";

class Preview extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <section className='section-preview'>
        <Header personalInfo={this.props.personalInfo}></Header>
        <Summary personalInfo={this.props.personalInfo}></Summary>
        <div className='preview-experience'></div>
        <div className='preview-education'></div>
      </section>
    );
  }
}

export default Preview;

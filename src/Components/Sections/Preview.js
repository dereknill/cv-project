import { Component } from "react";
import Header from "./Previews/Header";
import Summary from "./Previews/Summary";
import Education from "./Previews/Education";
import Experience from "./Previews/Experience";

class Preview extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <section className='section-preview section-to-print'>
        <Header personalInfo={this.props.personalInfo}></Header>
        <Summary personalInfo={this.props.personalInfo}></Summary>
        <Education educationList={this.props.educationList}></Education>
        <Experience experienceList={this.props.experienceList}></Experience>
      </section>
    );
  }
}

export default Preview;

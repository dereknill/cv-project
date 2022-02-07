import { Component } from "react";
import Form from "./Sections/Form";
import Preview from "./Sections/Preview";

class Main extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      experienceList: [],
      educationList: [],
      personalInfo: [],
    };
  }

  render() {
    return (
      <main>
        <Form
          experienceList={this.state.experienceList}
          educationList={this.state.educationList}></Form>
        <Preview></Preview>
      </main>
    );
  }
}

export default Main;

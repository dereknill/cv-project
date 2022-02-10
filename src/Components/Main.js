import { Component } from "react";
import React from "react";
import Form from "./Sections/Form";
import Preview from "./Sections/Preview";
import EducationObj from "./Sections/Util/EducationObj";
import ExperienceObj from "./Sections/Util/ExperienceObj";
import { v4 as uuidv4 } from "uuid";
import PersonalObj from "./Sections/Util/PersonalObj";
import ExampleData from "./Sections/Util/ExampleData";

class Main extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.componentRef = React.createRef();
    this.state = {
      experienceList: [new ExperienceObj(uuidv4())],
      educationList: [new EducationObj(uuidv4())],
      personalInfo: [new PersonalObj(uuidv4())],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.loadExampleData = this.loadExampleData.bind(this);
  }

  loadExampleData(event) {
    event.preventDefault();
    const exampleData = new ExampleData();
    this.setState({
      experienceList: exampleData.experienceList,
      educationList: exampleData.educationList,
      personalInfo: exampleData.personalInfo,
    });
  }

  handlePhoneChange(phoneNum) {
    this.setState({
      personalInfo: [{ ...this.state.personalInfo[0], phone: phoneNum }],
    });
  }

  handleChange(event) {
    const index = event.target.getAttribute("index");
    const name = event.target.name;
    const section = event.target.getAttribute("section");
    let listCopy;
    let key;
    if (!section) {
      listCopy = [...this.state.personalInfo];
      key = "personalInfo";
    } else if (section === "edu") {
      listCopy = [...this.state.educationList];
      key = "educationList";
    } else if (section === "exp") {
      listCopy = [...this.state.experienceList];
      key = "experienceList";
    }

    for (let i = 0; i < listCopy.length; i++) {
      if (listCopy[i].index === index) {
        listCopy[i][name] = event.target.value;
      }
    }

    this.setState({ [key]: listCopy });
  }

  handleAdd(event) {
    event.preventDefault();
    const section = event.target.getAttribute("section");
    let listCopy;
    let key;
    let newObj;
    if (section === "edu") {
      listCopy = [...this.state.educationList];
      newObj = new EducationObj(uuidv4());
      key = "educationList";
    } else if (section === "exp") {
      listCopy = [...this.state.experienceList];
      newObj = new ExperienceObj(uuidv4());
      key = "experienceList";
    } else {
      return null;
    }
    listCopy.push(newObj);

    this.setState({
      [key]: listCopy,
    });
  }

  handleDelete(event) {
    event.preventDefault();
    const index = event.target.getAttribute("index");
    const section = event.target.getAttribute("section");
    let listCopy, key;

    if (section === "edu") {
      listCopy = [...this.state.educationList];
      key = "educationList";
    } else if (section === "exp") {
      listCopy = [...this.state.experienceList];
      key = "experienceList";
    }

    const filteredList = listCopy.filter(
      (element, i) => element.index !== index
    );
    this.setState({
      [key]: filteredList,
    });
  }

  render() {
    return (
      <main>
        <Form
          experienceList={this.state.experienceList}
          educationList={this.state.educationList}
          personalObject={this.state.personalInfo[0]}
          handleChange={this.handleChange}
          handleAdd={this.handleAdd}
          handleDelete={this.handleDelete}
          handlePhoneChange={this.handlePhoneChange}
          loadExampleData={this.loadExampleData}
        ></Form>
        <Preview
          experienceList={this.state.experienceList}
          educationList={this.state.educationList}
          personalInfo={this.state.personalInfo[0]}
        ></Preview>
      </main>
    );
  }
}

export default Main;

import { Component } from "react";
import React from "react";
import Form from "./Sections/Form";
import Preview from "./Sections/Preview";
import EducationObj from "./Sections/Util/EducationObj";
import ExperienceObj from "./Sections/Util/ExperienceObj";
import { v4 as uuidv4 } from "uuid";

class Main extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      experienceList: [new ExperienceObj(0)],
      educationList: [new EducationObj(0)],
      personalInfo: [
        {
          firstName: "",
          lastName: "",
          title: "",
          address: "",
          city: "",
          state: "",
          phone: "",
          description: "",
          email: "",
        },
      ],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.getComponentRef = this.getComponentRef.bind(this);
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

    listCopy[index][name] = event.target.value;
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
      newObj = new EducationObj(this.state.educationList.length);
      key = "educationList";
    } else if (section === "exp") {
      listCopy = [...this.state.experienceList];
      newObj = new ExperienceObj(this.state.experienceList.length);
      key = "experienceList";
    }
    console.log(listCopy);
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
      (element, i) => parseInt(element.index) !== parseInt(index)
    );
    this.setState({
      [key]: filteredList,
    });
  }

  getComponentRef() {
    return this.componentRef;
  }
  render() {
    return (
      <main>
        <Form
          experienceList={this.state.experienceList}
          educationList={this.state.educationList}
          personalObject={this.state.personalInfo}
          handleChange={this.handleChange}
          handleAdd={this.handleAdd}
          handleDelete={this.handleDelete}
          handlePhoneChange={this.handlePhoneChange}
          getComponentRef={this.getComponentRef}
        ></Form>
        <Preview
          ref={(el) => (this.componentRef = el)}
          experienceList={this.state.experienceList}
          educationList={this.state.educationList}
          personalInfo={this.state.personalInfo[0]}
        ></Preview>
      </main>
    );
  }
}

export default Main;

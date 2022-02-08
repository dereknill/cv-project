import { Component } from "react";
import Form from "./Sections/Form";
import Preview from "./Sections/Preview";
import EducationObj from "./Sections/Util/EducationObj";
import ExperienceObj from "./Sections/Util/ExperienceObj";

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
  }

  handlePhoneChange(phone) {
    console.log(phone);
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

    const filteredList = listCopy.filter((element, i) => i !== parseInt(index));
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
          personalObject={this.state.personalInfo}
          handleChange={this.handleChange}
          handleAdd={this.handleAdd}
          handleDelete={this.handleDelete}
          handlePhoneChange={this.handlePhoneChange}
        ></Form>
        <Preview experienceList={this.state.experienceList}></Preview>
      </main>
    );
  }
}

export default Main;

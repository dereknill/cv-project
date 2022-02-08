import { Component } from "react";
import Personal from "./Forms/Personal";
import Experience from "./Forms/Experience";
import Education from "./Forms/Education";

class Form extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  addExperienceSections(list) {
    return list.map((element, index) => {
      const lastElement = index === list.length - 1;
      
      return <Experience
        lastElement={lastElement}
        handleDelete={this.props.handleDelete}
        handleAdd={this.props.handleAdd}
        index={index}
        handleChange={this.props.handleChange}
        key={index}
        experienceObject={element}
        addDeleteButton={list.length > 1}
        >
        </Experience>;
    });
  }

  addEducationSections(list) {

    return list.map((element, index) => {
      const lastElement = index === list.length - 1;
      return <Education lastElement={lastElement} handleAdd={this.props.handleAdd} handleDelete={this.props.handleDelete} handleChange={this.props.handleChange} index={index} key={index} educationObject={element} addDeleteButton={list.lengt > 1}></Education>;
    });
  }

  render() {
    return (
      <section className='section-form'>
        <form>
          <Personal></Personal>
          {this.addEducationSections(this.props.educationList)}
          {this.addExperienceSections(this.props.experienceList)}
        </form>
      </section>
    );
  }
}

export default Form;

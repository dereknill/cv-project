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
    if (list.length < 1) {
      return <Experience lastElement={true}></Experience>;
    }
    return list.map((element, index) => {
      const lastElement = index === list.length - 1;
      return <Experience lastElement={lastElement}></Experience>;
    });
  }

  addEducationSections(list) {
    if (list.length < 1) {
      return <Education lastElement={true}></Education>;
    }
    return list.map((element, index) => {
      const lastElement = index === list.length - 1;
      return <Education lastElement={lastElement}></Education>;
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

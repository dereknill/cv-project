import { Component } from "react";
import Personal from "./Forms/Personal";
import Experience from "./Forms/Experience";
import Education from "./Forms/Education";
import ReactToPrint from "react-to-print";

class Form extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  addExperienceSections(list) {
    return list.map((element, index) => {
      const lastElement = index === list.length - 1;

      return (
        <Experience
          lastElement={lastElement}
          handleDelete={this.props.handleDelete}
          handleAdd={this.props.handleAdd}
          index={element.index}
          handleChange={this.props.handleChange}
          key={element.index}
          experienceObject={element}
          addDeleteButton={list.length > 1}
        ></Experience>
      );
    });
  }

  addEducationSections(list) {
    return list.map((element, index) => {
      const lastElement = index === list.length - 1;
      return (
        <Education
          lastElement={lastElement}
          handleAdd={this.props.handleAdd}
          handleDelete={this.props.handleDelete}
          handleChange={this.props.handleChange}
          index={element.index}
          key={element.index}
          educationObject={element}
          addDeleteButton={list.length > 1}
        ></Education>
      );
    });
  }

  render() {
    return (
      <section className='section-form'>
        <form>
          <Personal
            handleChange={this.props.handleChange}
            personalObject={this.props.personalObject}
            handlePhoneChange={this.props.handlePhoneChange}
          ></Personal>
          {this.addEducationSections(this.props.educationList)}
          {this.addExperienceSections(this.props.experienceList)}
          <div className='button-container'>
            <button
              className='bottom-button'
              onClick={this.props.loadExampleData}
            >
              Load Example
            </button>
          </div>

          <div className='button-container'>
            <button
              className='bottom-button green-bg'
              onClick={(e) => {
                e.preventDefault();
                window.print();
              }}
            >
              Print CV
            </button>
          </div>
        </form>
      </section>
    );
  }
}

export default Form;

// {/* <ReactToPrint
// trigger={() => {
//   return (
//     <div className='button-container'>
//       <button
//         className='bottom-button green-bg'
//         onClick={(e) => e.preventDefault()}
//       >
//         Print CV
//       </button>
//     </div>
//   );
// }}
// content={() => this.props.getComponentRef()}
// /> */}

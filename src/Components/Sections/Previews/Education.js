import { Component } from "react";

class Education extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  getEducationSections(list) {
    return list.map((element, index) => {
      return (
        <div className='entry-section' key={index}>
          <div>
            <strong>{element.establishment}</strong>
          </div>
          <div>{element.location}</div>
          <div>
            <em>{element.degreeTitle}</em>
          </div>
          <div>{element.year}</div>
        </div>
      );
    });
  }
  render() {
    const educationList = this.props.educationList;
    let enabled = false;
    for (let i = 0; i < educationList.length; i++) {
      for (const [key, value] of Object.entries(educationList[i])) {
        if (key !== "index" && value.length > 0) {
          enabled = true;
          break;
        }
      }
    }

    if (!enabled) {
      return null;
    }
    return (
      <div className='preview-entry'>
        <h2>EDUCATION</h2>
        <hr></hr>
        {this.getEducationSections(educationList)}
      </div>
    );
  }
}

export default Education;

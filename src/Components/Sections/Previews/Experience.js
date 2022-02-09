import { Component } from "react";

class Experience extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  getExperienceSections(list) {
    return list.map((element, index) => {
      return (
        <div className='entry-section' key={index}>
          <div>
            <strong>{element.companyName}</strong>
          </div>
          <div>{element.location}</div>
          <div>
            <em>{element.title}</em>
          </div>
          <div>
            {element.dateStarted} - {element.dateEnded}
          </div>
        </div>
      );
    });
  }
  render() {
    const experienceList = this.props.experienceList;
    let enabled = false;
    for (let i = 0; i < experienceList.length; i++) {
      for (const [key, value] of Object.entries(experienceList[i])) {
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
        <h2>EXPERIENCE</h2>
        <hr></hr>
        {this.getExperienceSections(experienceList)}
      </div>
    );
  }
}

export default Experience;

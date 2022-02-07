import { Component } from "react";
import DeleteButton from "../Util/DeleteButton";
import AddButton from "../Util/AddButton";

class Education extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <fieldset>
        <legend>Education</legend>
        <input type='text' placeholder='Degree Title'></input>
        <input type='text' placeholder='Educational Establishment'></input>
        <input type='text' placeholder='GPA'></input>
        <input
          placeholder='Date Started'
          type='text'
          onFocus={(e) => (e.target.type = "date")}
          onBlur={(e) => (e.target.type = "text")}
        />
        <input
          type='text'
          placeholder='Date Ended (leave blank if in progress)'
          onFocus={(e) => (e.target.type = "date")}
          onBlur={(e) => (e.target.type = "text")}></input>
        <textarea
          placeholder='Relevant Coursework'
          cols='1000'
          rows='3'></textarea>
        <DeleteButton></DeleteButton>
        {this.props.lastElement && <AddButton></AddButton>}
      </fieldset>
    );
  }
}

export default Education;

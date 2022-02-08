import { Component } from "react";
import DeleteButton from "../Util/DeleteButton";
import AddButton from "../Util/AddButton";

class Education extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const {
      index,
      lastElement,
      educationObject,
      handleAdd,
      handleChange,
      handleDelete,
      addDeleteButton,
    } = this.props;
    return (
      <fieldset>
        <legend>Education</legend>
        <input
          type='text'
          placeholder='Degree Title'
          name='degreeTitle'
          onChange={handleChange}
          section='edu'
          index={index}
          value={educationObject.degreeTitle}
        ></input>
        <input
          type='text'
          placeholder='Educational Establishment'
          name='establishment'
          section='edu'
          onChange={handleChange}
          index={index}
          value={educationObject.establishment}
        ></input>
        <input
          type='text'
          placeholder='GPA'
          name='gpa'
          section='edu'
          onChange={handleChange}
          index={index}
          value={educationObject.gpa}
        ></input>
        <input
          placeholder='Date Started'
          type='text'
          section='edu'
          name='dateStarted'
          index={index}
          onChange={handleChange}
          value={educationObject.dateStarted}
          onFocus={(e) => (e.target.type = "date")}
          onBlur={(e) => (e.target.type = "text")}
        />
        <input
          type='text'
          placeholder='Date Ended (leave blank if in progress)'
          name='dateEnded'
          section='edu'
          index={index}
          onChange={handleChange}
          value={educationObject.value}
          onFocus={(e) => (e.target.type = "date")}
          onBlur={(e) => (e.target.type = "text")}
        ></input>
        <textarea
          placeholder='Relevant Coursework'
          cols='1000'
          rows='3'
          name='coursework'
          section='edu'
          index={index}
          onChange={handleChange}
          value={educationObject.coursework}
        ></textarea>
        {addDeleteButton && (
          <DeleteButton
            section='edu'
            index={index}
            handler={handleDelete}
          ></DeleteButton>
        )}
        {lastElement && (
          <AddButton section='edu' handler={handleAdd}></AddButton>
        )}
      </fieldset>
    );
  }
}

export default Education;

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
          placeholder='Educational Establishment'
          name='establishment'
          section='edu'
          onChange={handleChange}
          index={index}
          value={educationObject.establishment}
        ></input>
        <input
          type='text'
          placeholder='Location'
          name='location'
          section='edu'
          onChange={handleChange}
          index={index}
          value={educationObject.location}
        ></input>
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
          placeholder='Graduation Year'
          type='number'
          section='edu'
          name='year'
          index={index}
          onChange={handleChange}
          value={educationObject.year}
        ></input>
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

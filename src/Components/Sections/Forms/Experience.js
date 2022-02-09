import { Component } from "react";
import DeleteButton from "../Util/DeleteButton";
import AddButton from "../Util/AddButton";

class Experience extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const {
      lastElement,
      index,
      handleChange,
      experienceObject,
      handleAdd,
      handleDelete,
      addDeleteButton,
    } = this.props;
    return (
      <fieldset>
        <legend>Experience</legend>

        <input
          type='text'
          placeholder='Company Name'
          name='companyName'
          index={index}
          onChange={handleChange}
          value={experienceObject.companyName}
          section='exp'
        ></input>
        <input
          type='text'
          placeholder='Location'
          name='location'
          index={index}
          onChange={handleChange}
          value={experienceObject.location}
          section='exp'
        ></input>
        <input
          type='text'
          placeholder='Title'
          name='title'
          index={index}
          onChange={handleChange}
          value={experienceObject.title}
          section='exp'
        ></input>
        <input
          placeholder='Year Started'
          type='number'
          name='dateStarted'
          index={index}
          onChange={handleChange}
          value={experienceObject.dateStarted}
          section='exp'
        />
        <input
          type='number'
          placeholder='Year Ended (leave blank if current employer)'
          index={index}
          name='dateEnded'
          onChange={handleChange}
          value={experienceObject.dateEnded}
          section='exp'
        ></input>
        {addDeleteButton && (
          <DeleteButton
            handler={handleDelete}
            index={index}
            section='exp'
          ></DeleteButton>
        )}
        {lastElement && (
          <AddButton handler={handleAdd} section='exp'></AddButton>
        )}
      </fieldset>
    );
  }
}

export default Experience;

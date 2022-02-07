import { Component } from "react";
import DeleteButton from "../Util/DeleteButton";
import AddButton from "../Util/AddButton";

class Experience extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <fieldset>
        <legend>Experience</legend>
        <input type='text' placeholder='Title'></input>
        <input type='text' placeholder='Company Name'></input>
        <input
          placeholder='Date Started'
          type='text'
          onFocus={(e) => (e.target.type = "date")}
          onBlur={(e) => (e.target.type = "text")}
        />
        <input
          type='text'
          placeholder='Date Ended (leave blank if current employer)'
          onFocus={(e) => (e.target.type = "date")}
          onBlur={(e) => (e.target.type = "text")}></input>
        <textarea placeholder='Achievements' cols='1000' rows='5'></textarea>
        <DeleteButton></DeleteButton>
        {this.props.lastElement && <AddButton></AddButton>}
      </fieldset>
    );
  }
}

export default Experience;

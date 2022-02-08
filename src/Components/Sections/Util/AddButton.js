import { Component } from "react";

class AddButton extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <button className='add-button' onClick={this.props.handler} section={this.props.section}>
        <span className='button-text'>Add More</span>
      </button>
    );
  }
}

export default AddButton;

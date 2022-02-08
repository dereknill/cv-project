import { Component } from "react";

class DeleteButton extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return <button className='delete-button' index={this.props.index} onClick={this.props.handler} section={this.props.section}>Delete</button>;
  }
}

export default DeleteButton;

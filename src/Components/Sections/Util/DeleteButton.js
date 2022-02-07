import { Component } from "react";

class DeleteButton extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return <button className='delete-button'>Delete</button>;
  }
}

export default DeleteButton;

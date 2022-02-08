import { Component } from 'react';

class Preview extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
      return (
        <section className="section-preview">
          <h3>{this.props.experienceList[0].achievements}</h3>
          </section>
      );
      
  }
}

export default Preview;
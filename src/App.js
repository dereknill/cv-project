import { Component } from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';

class App extends Component {

  constructor(props) {
    super(props);
    this.props = props;
  } 

  render() {
    return (
      <div className="app">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;

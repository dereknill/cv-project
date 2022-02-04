import { Component } from 'react';
import Form from './Sections/Form';
import Preview from './Sections/Preview';

class Main extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <main>
                <Form></Form>
                <Preview></Preview>
            </main>
        );
    }
}

export default Main;
import { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <header>
                <h1>CV Creator</h1>
            </header>
        );
    }
}

export default Header;
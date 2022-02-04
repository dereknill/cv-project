import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub } from '@fortawesome/free-brands-svg-icons';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <footer>
                <h4>Created by Derek Clancy-Nill</h4><FontAwesomeIcon icon={faGithub} className="margin-0-5"></FontAwesomeIcon>
            </footer>
        );
    }
}

export default Footer;
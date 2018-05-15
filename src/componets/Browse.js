import React, { Component } from "react";
import { Row, Col } from 'react-materialize';
import {
    Route,
    HashRouter,
} from "react-router-dom";
import Header from './partials/Header';
import '../Profile.css';
import Stats from './Stats';


class Profile extends Component {
    render() {
        return (
            <div>
                <Header user={this.props.user} />
                <div className="content">
                    <Row>
                        <Col s={2} > <Stats user={this.props.user} /></Col>
                        <Users />
                    </Row>
                </div>
            </div>
        );
    }
}

export default Profile;
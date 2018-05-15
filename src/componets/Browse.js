import React, { Component } from "react";
import { Row, Col } from 'react-materialize';
import Header from './partials/Header';
import '../Profile.css';
import Stats from './Stats';
import Users from './Users';

class Browse extends Component {
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

export default Browse;
import React, { Component } from "react";
import { Row, Col } from 'react-materialize';
import Header from './partials/Header';
import '../Profile.css';
import Stats from './Stats';
import Users from './Users';

class Browse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        }
    }

    filter = (input) => {
        this.setState({ query: input });
    }
    render() {
        return (
            <div>
                <Header
                    user={this.props.user}
                    handleSearch={this.props.handleSearch}
                    filter={this.filter} />
                <div className="content">
                    <Row>
                        <Col s={2} > <Stats updateUser={this.props.updateUser} user={this.props.user} /></Col>
                        <Users user={this.props.user}
                            updateUser={this.props.updateUser}
                            query={this.state.query} />
                    </Row>
                </div>
            </div>
        );
    }
}

export default Browse;
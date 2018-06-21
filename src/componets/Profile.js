import React, { Component } from "react";
import { Row, Col } from 'react-materialize';

// import {
//     HashRouter,
// } from "react-router-dom";

import Header from './partials/Header';
import '../Profile.css';
import Stats from './Stats';
import WrittenTweets from './containers/WrittenTweets';
import PurchasedTweets from './containers/PurchasedTweets';


class Profile extends Component {
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
            // <HashRouter>
                <div>
                    <Header user={this.props.user}
                        handleSearch={this.props.handleSearch}
                        filter={this.filter} />
                    <div className="content">
                        <Row>
                            <Col s={4} >
                                <Stats
                                    user={this.props.user}
                                    updateUser={this.props.updateUser} 
                                    />
                            </Col>
                                <WrittenTweets 
                                    user={this.props.user}
                                    updateUser={this.props.updateUser}
                                    query={this.state.query} 
                                    />
                                <PurchasedTweets 
                                    user={this.props.user}
                                    updateUser={this.props.updateUser}
                                    query={this.state.query} />
                        </Row>
                    </div>
                </div>
            // </HashRouter>
        );
    }
}

export default Profile;
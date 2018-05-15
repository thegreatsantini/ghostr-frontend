import React, { Component } from "react";
import { Row, Col } from 'react-materialize';
import {
    HashRouter,
} from "react-router-dom";
import Header from './partials/Header';
// import User from './User'
import '../Profile.css';
import Stats from './Stats';
import WrittenTweets from './containers/WrittenTweets';
import PurchasedTweets from './containers/PurchasedTweets';


class Profile extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Header user={this.props.user} />
                    <div className="content">
                        <Row>
                            <Col s={4} > <Stats 
                            user={this.props.user} 
                            /></Col>
                            <WrittenTweets user={this.props.user} />
                            <PurchasedTweets user={this.props.user} />
                        </Row>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Profile;
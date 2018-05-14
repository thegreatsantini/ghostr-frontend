import React, { Component } from "react";
import Stats from './Stats';
import WrittenTweets from './containers/WrittenTweets';
import PurchasedTweets from './containers/PurchasedTweets';
import { Row, Col } from 'react-materialize';


class User extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col s={2} > <Stats user={this.props.user} /></Col>
                    <WrittenTweets writtenTweets={this.props.user.writtenTweets} />
                    <PurchasedTweets purchasedTweets={this.props.user.purchasedTweets} />

                </Row>
            </div>
        );
    }
}

export default User;
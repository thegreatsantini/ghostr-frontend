import React, { Component } from "react";
import Stats from './Stats';
import WrittenTweets from './containers/WrittenTweets';
import PurchasedTweets from './containers/PurchasedTweets';
import { Row, Col } from 'react-materialize';


class User extends Component {
    render() {
        let tweets = <Row>
                        <Col s={2} > <Stats user={null} /></Col>
                        <WrittenTweets writtenTweets={null} />
                        <PurchasedTweets purchasedTweets={null} />;
                    </Row>
        if (this.props.user !== null || this.props.user.purchasedTweets !== null || this.props.user.writtenTweets !== null) {
            tweets = <Row>
                        <Col s={2} > <Stats user={this.props.user} /></Col>
                        <WrittenTweets writtenTweets={this.props.user.writtenTweets} />
                        <PurchasedTweets purchasedTweets={this.props.user.purchasedTweets} />
                    </Row>
        }
        return (
            <div>
                {tweets}
            </div>
        );
    }
}

export default User;
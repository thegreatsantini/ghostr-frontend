import React, { Component } from "react";
import Subscriptions from './containers/Subscriptions';
import WrittenTweets from './containers/WrittenTweets';
import PurchasedTweets from './containers/PurchasedTweets';
import { Row, Col } from 'react-materialize';
class User extends Component {

    componentDidMount = () => {
        // console.log(this.props.user.writtenTweets)
    }
    render() {
        return (
            <div>
                <Row  >
                    <Col s={8} > <h1> Hello {this.props.user.displayName}  </h1></Col>
                    <Col s={4} > <h5> reputation: {this.props.user.reputation}  </h5></Col>
                </Row>
                <Row>
                    <Col s={2} > <Subscriptions subs={this.props.user.subscriptions} /></Col>
                    <WrittenTweets writtenTweets={this.props.user.writtenTweets} />
                    <PurchasedTweets purchasedTweets={this.props.user.purchasedTweets} />

                </Row>
            </div>
        );
    }
}

export default User;
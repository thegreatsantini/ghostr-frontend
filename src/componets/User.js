import React, { Component } from "react";
import Subscriptions from './containers/Subscriptions';
import { Row, Col } from 'react-materialize';
class User extends Component {
    render() {
        // let regex = /^(\w){6}/g
        // let customName = this.props.user._id.match(regex)
        let currentUser = {
            // "_id": ObjectId("5af78526f507930606ea5f32"),
            "subscriptions": [
                "DogeThoughts",
                'weHeartDoge',
                "Keto4Life"
            ],
            "writtenTweets": [
                "OMG i luv doge",
                'Look at this smol doge',
                'I am doge i bork for my human',
                
            ],
            "purchasedTweets": [
                "wow, these keto chicken wings recipes are 2die4 ",
                "Someone posined the waterhole"
            ],
            "accessToken": "String2",
            "accessTokenSecret": "String2",
            "displayName": "name2",
            "twitterId": "TI_2",
            "reputation": 2,
            "__v": 0
        }
        return (
            <div>
                <Row  >
                    <Col s={8} > <h1> Hello {currentUser.displayName} </h1></Col>
                    <Col s={4} > <h5> reputation: {currentUser.reputation} </h5></Col>
                </Row>
                <Row>
                    <Col s={2} > <Subscriptions subs={currentUser.subscriptions} /> </Col>
                </Row>
            </div>
        );
    }
}

export default User;
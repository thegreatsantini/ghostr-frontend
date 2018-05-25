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
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         writtenTweets: ['The worst part about being a giraffe is having a lot of time to think about your mistakes when you\'re sinking into quicksand.', 'Alex Trebek: (into mirror) Who is alex trebek', 'Avoid unwanted pregnancies by using the "pull out" method where you pull out an acoustic guitar at a party & no one will have sex with you.', 'The best thing about trying to name a baby is realizing how many people you hate', '@parisreview So is Paris any good or not', 'If I was stuck on a desert island with only one record, I would want it to be the record for being able to swim the farthest.', 'What do you mean I didn’t win I ate more wet t-shirts than anyone else']
    //     }
    // }

    // updateList = () => {
    //     fetch(SERVER_URL + '/profile/' + this.props.user.handle)
    //         .then(response => response.json())
    //         .then(response => {
    //             console.log(response);
    //             let newArr = this.state.writtenTweets;
    //             newArr = newArr.concat(response.writtenTweets);
    //             console.log(newArr);
    //             this.setState({
    //                 writtenTweets: newArr
    //             }, () => console.log(this.state.writtenTweets))
    //         })
    // }
    render() {
        return (
            <HashRouter>
                <div>
                    <Header user={this.props.user} />
                    <div className="content">
                        <Row>
                            <Col s={4} > 
                            <Stats 
                                user={this.props.user}
                                updateUser={this.props.updateUser} />
                            </Col>
                            <WrittenTweets user={this.props.user}
                                           updateUser={this.props.updateUser} />
                            <PurchasedTweets user={this.props.user}
                                             updateUser={this.props.updateUser} />
                        </Row>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Profile;
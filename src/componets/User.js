import React, { Component } from "react";
import { Row, Col } from 'react-materialize';
import {
    HashRouter,
} from "react-router-dom";
import Header from './partials/Header';
import '../Profile.css';
import Stats from './Stats';
import WrittenTweets from './containers/WrittenTweets';
import PurchasedTweets from './containers/PurchasedTweets';


class User extends Component {
	componentDidMount() {
		// console.log('props: ' + Object.keys(this.props));
		console.log('id: ' + this.props.match.params.id);
	}
    render() {
        return (
            <HashRouter>
                <div>
                    <Header user={this.props.user} />
                    <div className="content">
                        <Row>
                            <Col s={2} > <Stats user={this.props.user} /></Col>
                            <WrittenTweets user={this.props.user} />
                        </Row>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default User;
import React, { Component } from "react";
import {
    Modal,
    Row,
    Button,
    Input,
    Col,
    Card
} from 'react-materialize';
import axios from 'axios';
// const SERVER_URL = 'https://inkytweet.herokuapp.com';
const SERVER_URL = 'http://localhost:8080';

class ViewTweets extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tweets: []
		}
	}

	componentDidMount() {
		fetch(`${SERVER_URL}/users/${this.props.userHandle}`)
		.then(response => response.json())
	    .then(response => {
	    	if (response.writtenTweets != []) {
	    		this.setState({
	    			tweets: response.writtenTweets
	    		})
	    	}
	    });
	}

    render() {
    	let allTweets = '';
        if (this.state.tweets !== []) {
            allTweets = this.state.tweets.map((tweet, i) => {
                return (
                    <Col s={6}>
                        <Card key={i} className='darken-1' textClassName='black-text' title={tweet.tweet_id}>
                        	{tweet.body}
                        </Card>
                    </Col>
                )
            })
        }

        return (
            <div>
                <Modal
                    header='InkyTweets'
                    trigger={<Button>View Tweets</Button>}>
                    <Row>
                    	{allTweets}
                    </Row>
                </Modal>
            </div>
        );
    }
}

export default ViewTweets;
import React, { Component } from "react";
import { Col, Card, CardTitle } from 'react-materialize';
import axios from 'axios';
const SERVER_URL = 'http://localhost:8080';



class WrittenTweets extends Component {
    constructor() {
        super()
        this.state = {
            writtenTweets: []
        }
    }
    componentDidMount = () => {
        this.setState({writtenTweets: this.props.user.writtenTweets});
    }

    componentWillReceiveProps = () => {
        console.log('new props');
    }

    handleTweetRemove = (e, id) => {
        axios.delete(`${SERVER_URL}/profile/${id}`, {data: {writer: this.props.user}})
        this.props.updateUser();
        this.setState({writtenTweets: this.props.user.writtenTweets})
    }

    render() {
        const buttonStyle = {margin: '10px 10px 10px 0'};
        let writtenTweets = <div>No written tweets</div>;
        let tags = '';
        if (this.state.writtenTweets !== []) {
            writtenTweets = this.state.writtenTweets.map((tweet, i) => {
                tweet.categories === [] ? tags = '' : tags = tweet.categories.map((tag, i) => {return (<p key={i}> {tag} </p>)});
                return (
                    <Card
                        key={i}
                        header={<CardTitle reveal waves='light' />}
                        title={tweet.body}
                        reveal={<div>{tags}</div>} >
                        <p>
                            <a href="http://localhost:3000/profile#/">Creator</a>{' '}
                            <button
                                data-id={tweet._id}
                                className="btn btn-default"
                                style={buttonStyle}
                                onClick={(e) => this.handleTweetRemove(e, tweet._id)}>Remove</button>
                        </p>
                    </Card>
                )
            })
        }

        return (
            <div>
                <Col s={4}>
                    {writtenTweets}
                </Col>
            </div>
        );
    }
}

export default WrittenTweets;
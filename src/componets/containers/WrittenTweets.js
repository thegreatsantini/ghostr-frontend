import React, { Component } from "react";
import { Col, Card, CardTitle } from 'react-materialize';
// const SERVER_URL = 'http://localhost:8080';



class WrittenTweets extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         writtenTweets: ['The worst part about being a giraffe is having a lot of time to think about your mistakes when you\'re sinking into quicksand.', 'Alex Trebek: (into mirror) Who is alex trebek', 'Avoid unwanted pregnancies by using the "pull out" method where you pull out an acoustic guitar at a party & no one will have sex with you.', 'The best thing about trying to name a baby is realizing how many people you hate', '@parisreview So is Paris any good or not', 'If I was stuck on a desert island with only one record, I would want it to be the record for being able to swim the farthest.', 'What do you mean I didn’t win I ate more wet t-shirts than anyone else']

    //     }
    // }

    // componentDidMount() {
        // this.props.updateList();
    // }

    handleTweetRemove = (e) => {
        const tweetToRemove = this.state.writtenTweets
        tweetToRemove.splice(e.target.id, 1)
        this.setState({
            writtenTweets : tweetToRemove
        })
        this.props.updateUser();
    }

    render() {
        const buttonStyle = {margin: '10px 10px 10px 0'};
        let writtenTweets = <div>No written tweets</div>;
        let tags = '';
        if (this.props.user.writtenTweets !== []) {
            writtenTweets = this.props.user.writtenTweets.map((tweet, i) => {
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
                                id={i}
                                className="btn btn-default"
                                style={buttonStyle}
                                onClick={(e) => this.handleTweetRemove(e)}>Remove</button>
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
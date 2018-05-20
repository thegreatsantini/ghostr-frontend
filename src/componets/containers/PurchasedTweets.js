import React, { Component } from "react";
import {
    Col,
    Card,
    CardTitle
} from 'react-materialize';

class PurchasedTweets extends Component {
    constructor() {
        super()
        this.state = {
            purchasedTweets: ['Once You Go In You Always Come Out Alive', ' Most Trees Are Blue', 'How Can Mirrors Be Real If Our Eyes Aren\'t Real', 'If A Book Store Never Runs Out Of A Certain Book, Dose That Mean That Nobody Reads It, Or Everybody Reads It', 'You Can Discover Everything You Need To Know About Everything By Looking At Your Hands', 'Hi I\'m Ben Franklin and this is Jackass! *Flies a kite in a thunder storm*', 'I once dated an apostrophe. Too possessive.', 'NOT EVERYONE WAS KUNG FU FIGHTING, MOM. SOME OF US WERE TRYING TO BREAK IT UP.']
        }
    }

    handleTweetRemove = (e) => {
        const tweetToRemove = this.state.purchasedTweets
        tweetToRemove.splice(e.target.id, 1)
        this.setState({
            purchasedTweets : tweetToRemove
        })
    }
    
    render() {
        const buttonStyle = {margin: '10px 10px 10px 0'};
        let purchasedTweets = <div>No written tweets</div>;
        let tags = '';
        if (this.props.user.purchasedTweets !== []) {
            purchasedTweets = this.props.user.purchasedTweets.map((tweet, i) => {
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
                    {purchasedTweets}
                </Col>
            </div>
        );
    }
}

export default PurchasedTweets;
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
        // let purchasedTweets = <div>No purchased tweets</div>;
        // if (this.props.user.purchasedTweets !== []) {
        //     purchasedTweets = this.props.user.purchasedTweets.map((tweet, i) => {
        //         return (
        //             <Card key={i} header={<CardTitle reveal waves='light' />}
        //                 title={tweet}
        //                 reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
        //                 <p><a href="#">This is a link</a></p>
        //             </Card>
        //         )
        //     })
        // }

        var buttonStyle = {
            margin: '10px 10px 10px 0',
        };

        let purchasedTweetsList = this.state.purchasedTweets.map((tweet, i) => {

            return (
                <Card
                    key={i}
                    header={<CardTitle reveal waves='light' />}
                    title={tweet}
                    reveal={<p>Hashtags will go here</p>}
                >
                    <p><a 
                        href='http://localhost:3000/'>Creator</a>{' '} 
                        <button
                            id={i}
                            className="btn btn-default"
                            style={buttonStyle}
                            onClick={(e) => this.handleTweetRemove(e)}>Remove</button></p>
                </Card>
            )
        })

        return (
            <div>
                <Col s={4}>
                    {purchasedTweetsList}
                </Col>
            </div>
        );
    }
}

export default PurchasedTweets;
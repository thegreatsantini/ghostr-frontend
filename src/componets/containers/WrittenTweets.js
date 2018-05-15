import React, { Component } from "react";
import {
    Col,
    Card
} from 'react-materialize'

class WrittenTweets extends Component {
    render() {
        let writtenTweets = '';
        if (this.props.user.writtenTweets !== []) {
            writtenTweets = this.props.user.writtenTweets.map((tweet, i) => {
                return (
                    <Card key={i} className='darken-1' textClassName='white-text' title={tweet} actions={[<a href='#'>This is a link</a>]}>
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
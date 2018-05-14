import React, { Component } from "react";
import {
    Col,
    Card,
    CardTitle
} from 'react-materialize'

class PurchasedTweets extends Component {
    render() {


        let purchasedTweets = this.props.purchasedTweets.map((tweet, i) => {
            return (
                <Card key={ i } header={<CardTitle reveal waves='light' />}
                    title={ tweet }
                    reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                    <p><a href="#">This is a link</a></p>
                </Card>
            )
        })

        return (
            <div>
                <Col
                    s={4}
                >
                    {purchasedTweets}
                </Col>

            </div>
        );
    }
}

export default PurchasedTweets;
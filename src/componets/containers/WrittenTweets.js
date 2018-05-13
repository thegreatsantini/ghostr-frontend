import React, { Component } from "react";
import {
    Collection,
    CollectionItem
} from 'react-materialize'

class WrittenTweets extends Component {
    render() {
        let subsList = this.props.subs.map((sub, i) => {
            return (
                <div key={i}>
                    <CollectionItem>{ sub } </CollectionItem>
                </div>
            )
        })
        return (
            <div>
                <Collection header='Subscriptions'>
                    Written Tweets
                </Collection>
            </div>
        );
    }
}

export default WrittenTweets;
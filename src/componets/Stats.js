import React, { Component } from "react";
import {
    Collection,
    CollectionItem
} from 'react-materialize';
import NewInkyTweetForm from './NewInkyTweetForm'

class Stats extends Component {
    // constructor(props) {
    //     super(props)
    // }
    render() {
        // let subsList = <div>No subs</div>;
        // if (this.props.user.subscriptions !== []) {
        //     subsList = this.props.user.subscriptions.map((sub, i) => {
        //         return (
        //             <CollectionItem key={i}> {sub}  </CollectionItem>
        //         )
        //     });
        // }

        const subscriptionsList = [ '@officialjadensmith', '@weratedogs', '@fuckjerry' ]
       let subsList = subscriptionsList.map( (sub, i) => {
            return (
                <CollectionItem key={i}> {sub}  </CollectionItem>
            )
        })

        return (
            <div>
                <div>
                    <h3> {this.props.user.handle} </h3>
                    <NewInkyTweetForm />
                    <h5> Reputation: {this.props.user.reputation} </h5>
                </div>
                <Collection header='Subscriptions'>
                    { subsList }
                    
                </Collection>
            </div>
        );
    }
}

export default Stats;


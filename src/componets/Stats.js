import React, { Component } from "react";
import {
    Collection,
    CollectionItem
} from 'react-materialize';

class Stats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subscriptions: [1, 2, 3]
            // subscriptions: this.props.user.subscriptions
        }
    }
    render() {
        let subsList = <div>No subs</div>;
        if (this.state.subscriptions) {
            subsList = this.state.subscriptions.map((sub, i) => {
                return (
                    <CollectionItem key={i}> {sub}  </CollectionItem>
                )
            });
        }
        let rep = 0;
        if (this.props.user.reputation) { rep = this.props.user.reputation }
        return (
            <div>
                <div>
                    <h3> {this.props.user.displayName} </h3>
                    <h5> Reputation: {rep} </h5>
                </div>
                <Collection header='Subscriptions'>
                    { subsList }
                </Collection>
            </div>
        );
    }
}

export default Stats;


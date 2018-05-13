import React, { Component } from "react";
import {
    Collection,
    CollectionItem
} from 'react-materialize'

class Subscriptions extends Component {
    render() {
        let subsList = this.props.subs.map((sub, i) => {
            return (
                
                    <CollectionItem key={i}> {sub}  </CollectionItem>
        )
        })
        return (
            <div>
                <Collection header='Subscriptions'>
                    { subsList }
                </Collection>
            </div>
        );
    }
}

export default Subscriptions;
import React, { Component } from "react";

class Subscriptions extends Component {
    render() {
        let subsList = this.props.subs.map( (sub, i) => {
            return (
                <div key={i}>
                    <p>{i}: {sub}</p>
                </div>
            )
        })
        return (
            <div>
            {subsList}
            </div>
        );
    }
}

export default Subscriptions;
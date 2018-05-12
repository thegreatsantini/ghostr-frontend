import React, { Component } from "react";
import Subscriptions from './Subscriptions'

class User extends Component {
    render() {
        // let regex = /^(\w){6}/g
        // let customName = this.props.user._id.match(regex)
        return (
                <div>
                    <h1> Hello Person </h1>
                <h2>Your reputation: {this.props.user.reputation}</h2>
                <Subscriptions subs={this.props.user.subscriptions} />
                </div>
        );
    }
}

export default User;
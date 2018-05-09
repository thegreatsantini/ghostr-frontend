import React, { Component } from "react";

class Stats extends Component {
    render() {
        let currentUser = this.props.users.map(user => {
            return <div key={user.id}>{user.username}</div>
        })
        return (
                <div>
                    {currentUser}
                </div>
        );
    }
}

export default Stats;
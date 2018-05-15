import React, { Component } from "react";
import { Row, Col } from 'react-materialize';


class User extends Component {
    render() {
        let testing = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        if (testing !== []) {
            writtenTweets = this.props.user.writtenTweets.map((tweet, i) => {
                return (
                    <Card key={i} className='darken-1' textClassName='white-text' title={tweet} actions={[<a href='#'>This is a link</a>]}>
                    </Card>
                )
            })
        }
        return (
            <div>
        );
    }
}

export default Users;
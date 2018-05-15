import React, { Component } from "react";
import { Row, Col, Card, Button } from 'react-materialize';
import ViewTweets from './ViewTweets';
import NewInkyTweetForm from './NewInkyTweetForm';
// const SERVER_URL = 'https://inkytweet.herokuapp.com';
const SERVER_URL = 'http://localhost:8080';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }
    componentDidMount() {
        fetch(SERVER_URL + '/users')
        .then(response => response.json())
        .then(response => {
            this.setState({
                users: response
            });
        })
    }
    render() {
        let allUsers = '';
        if (this.state.users !== []) {
            allUsers = this.state.users.map((user, i) => {
                return (
                    <Col s={4} m={3}>
                        <Card key={i} className='darken-1' textClassName='white-text' title={user.handle}>
                            <ViewTweets userHandle={user.handle}/>
                        </Card>
                    </Col>
                )
            })
        }
        return (
            <Row>
                {allUsers}
            </Row>
        );
    }
}

export default Users;
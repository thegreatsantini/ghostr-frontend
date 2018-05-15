import React, { Component } from "react";
import {
    Modal,
    Row,
    Button,
    Input
} from 'react-materialize';
import axios from 'axios';
// const SERVER_URL = 'https://inkytweet.herokuapp.com';
const SERVER_URL = 'http://localhost:8080';

class NewInkyTweetForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inkyTweet: '',
        }
    }

    onInputChange = (e) => {
        this.setState({
            inkyTweet: e.target.value
        })
    }

    handleSubmit = () => {
        axios.post(SERVER_URL + '/profile', this.state.inkyTweet)
        // this.props.updateList();

    }


    render() {
        return (
            <div>
                <Modal
                    header='New InkyTweet'
                    trigger={<Button>Tweet</Button>}>
                    <Row>
                        <Input type='textarea' s={12} onChange={(e) => this.onInputChange(e)} />
                        <Button waves='light' onClick={this.handleSubmit} > Tweet </Button>
                    </Row>
                </Modal>
            </div>
        );
    }
}

export default NewInkyTweetForm;
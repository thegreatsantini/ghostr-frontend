import React, { Component } from 'react';
import {
    Collapse,
    Button,
    CardBody,
    Card,
    ListGroup,
    ListGroupItem,
} from 'reactstrap'
import '../Home.css'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false
        };
    }

    toggle = () => {
        this.setState({ collapse: !this.state.collapse });
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='left'>
                        <h1>InkyTweet</h1>
                        <ListGroup>
                            <ListGroupItem onClick={this.toggle}>
                                get paid to write
                            <Collapse  isOpen={this.state.collapse}>
                                    <Card>
                                        <CardBody>
                                            Build your reputation by writing good content
                                    </CardBody>
                                    </Card>
                                </Collapse>
                            </ListGroupItem>
                            <ListGroupItem onClick={this.toggle}>
                                share your ideas
                                <Collapse isOpen={this.state.collapse}>
                                    <Card>
                                        <CardBody>
                                            Make an impact without a large twitter following
                                        </CardBody>
                                    </Card>
                                </Collapse>
                            </ListGroupItem>
                        </ListGroup>
                    </div>
                    <hr />
                    <div>
                    <Button color="primary">Log In</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
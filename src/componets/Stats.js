import React, { Component } from "react";
import { Row, Col, Grid } from 'react-bootstrap'
import {
    Card, CardHeader, CardFooter,
    CardTitle, CardText, Collapse, Button, CardBody
} from 'reactstrap';

class Stats extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    render() {
        const purchasedTweet = this.props.user.purchasedTweet.map((sub, i) => {
            return (
                <div key={i} >
                    <Card>
                        <CardHeader>{sub.creator}</CardHeader>
                        <CardBody>
                            <CardTitle>Special Title Treatment</CardTitle>
                            <CardText>{sub.body}</CardText>
                            <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
                            <Collapse isOpen={this.state.collapse}>
                                <Card>
                                    <CardBody>
                                        {sub.categories}
                                    </CardBody>
                                </Card>
                            </Collapse>
                        </CardBody>
                        <CardFooter>Footer</CardFooter>
                    </Card>
                </div>
            )
        })

        const writtenTweets = this.props.user.writtenTweets.map((tweet, i) => {
            return (
                <div key={i}>
                    { tweet.body }
                </div>
            )
        })
        // console.log(writtenTweets)

        const style = {
            border: '2px solid black'
        }

        return (
            <div>
                <Grid>
                    <Row className="show-grid">
                        <Col style={style} md={6} mdPush={6}>
                            { purchasedTweet }
                        </Col>
                        <Col style={style} md={6} mdPull={6}>
                            { writtenTweets }
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Stats;
import React, { Component } from "react";
import { Row, Col, Clearfix, Grid } from 'react-bootstrap'

class Stats extends Component {
    render() {
        const dummySentences = [
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
            'Donec hendrerit tempor tellus.',
            'Donec pretium posuere tellus.',
            'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.',
            'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
            'Nulla posuere.',
            'Donec vitae dolor.',
            'Nullam tristique diam non turpis.',
            'Cras placerat accumsan nulla.',
            'Nullam rutrum.',
            'Nam vestibulum accumsan nisl.'
        ];

        const style = {
            border: '2px solid black'
        }

        return (
            <div>
                <Grid>
                    <Row className="show-grid">
                        <Col style={style} md={6} mdPush={6}>
                            {dummySentences.slice(0, 6).join(' ')}
                        </Col>
                        <Col style={style} md={6} mdPull={6}>
                            {dummySentences.slice(0, 4).join(' ')}
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Stats;
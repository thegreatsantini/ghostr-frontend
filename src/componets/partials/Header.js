import React, { Component } from "react";
import {
    Navbar,
    NavItem,
    // Icon,
    Row,
    Input,
} from 'react-materialize'


class Header extends Component {
    handleChange = (e, val) => {
        this.props.filter(val)
    }

    render() {
        let userName = 'User';
        if (this.props.user.handle !== '') { userName = this.props.user.handle }
        return (
            <div>
                <Navbar brand='InkyTweet' right>
                    <Row>
                        <Input onChange={(e, val) => this.handleChange(e, val)} s={4} placeholder='Search...'/>
                        <NavItem s={4} href='/browse'>Browse</NavItem>
                        <NavItem s={4} href='/profile'>{userName}</NavItem>
                    </Row>
                </Navbar>
            </div>
                )
            }
        }
        
        
export default Header;
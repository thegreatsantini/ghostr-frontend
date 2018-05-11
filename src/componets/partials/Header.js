import React, { Component } from "react";
import {
    Navbar,
    Nav,
    NavDropdown,
    MenuItem,
    NavItem,
    Button,
    FormGroup,
    FormControl
} from 'react-bootstrap'

class Header extends Component {
    render() {
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a to="/">InkyTweet</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={1} href="http://localhost:3000/profile#/tweets">
                            Tweets
                        </NavItem>
                        <NavItem eventKey={2} href="http://localhost:3000/profile#/stats">
                            Stats
                        </NavItem>
                        <NavItem eventKey={2} href="http://localhost:3000/profile#/user">
                            User
                        </NavItem>
                    </Nav>
                    <Navbar.Form pullRight>
                        <FormGroup>
                            <FormControl type="text" placeholder="Search" />
                        </FormGroup>{' '}
                        <Button type="submit">Submit</Button>
                    </Navbar.Form>
                </Navbar>
            </div>
        )
    }
}


export default Header;
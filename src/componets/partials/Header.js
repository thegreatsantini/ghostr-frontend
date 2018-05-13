import React, { Component } from "react";
import {
    Navbar,
    Nav,
    NavItem,
    Button,
    FormGroup,
    FormControl
} from 'react-bootstrap'
import Search from '../Search'
import '../../Search.css'

class Header extends Component {
    render() {
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="http://localhost:3000/">InkyTweet</a>
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
                                <Search
                                    className='customStyle'
                                    suggestions={this.props.suggestions}
                                    onSuggestionsFetchRequested={this.props.onSuggestionsFetchRequested}
                                    onSuggestionsClearRequested={this.props.onSuggestionsClearRequested}
                                    getSuggestionValue={this.props.getSuggestionValue}
                                    renderSuggestion={this.props.renderSuggestion}
                                    inputProps={this.props.inputProps}
                                />
                        </FormGroup>{' '}
                        <Button type="submit">Submit</Button>
                    </Navbar.Form>
                </Navbar>
            </div>
        )
    }
}


export default Header;
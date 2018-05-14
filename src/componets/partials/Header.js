import React, { Component } from "react";
import {
    Navbar,
    NavItem,
    Icon,
    Row,
    Autocomplete
} from 'react-materialize'
import Search from '../Search'
import '../../Search.css'

class Header extends Component {
    render() {
        return (
            <div>
                <Navbar brand='InkyTweet' right>
                    <NavItem ><Icon>search</Icon></NavItem>
                    <NavItem href='/profile#/tweets'>Tweets</NavItem>
                    <NavItem href='/profile#/stats'>Stats</NavItem>
                    <NavItem href='/profile#/user'>User</NavItem>
                </Navbar>
                    <Row>
                        <Autocomplete
                            s={4}
                            title='Tweets'
                            data={
                                {
                                    'Apple': null,
                                    'Microsoft': null,
                                    'Google': 'http://placehold.it/250x250'
                                }
                            }
                        />
                            <Search s={4} />
                    </Row>
                    <p className='searchBar'>hello i am a test</p>
            </div>
                )
            }
        }
        
        
export default Header;